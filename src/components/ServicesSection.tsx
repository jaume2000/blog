'use client'
import { HOME_COPY } from '@/content/site'
import React, { useState } from 'react'
import ServicesMap from './ServicesMap'
import { ServiceHighlight, SERVICES } from '@/content/services'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {

    const [highlightState, setHighlightState] = useState<Record<ServiceHighlight, boolean|null>>({
        frontend: null,
        backend: null,
        database: null,
        aiService: null,
        aiTraining: null,
        dataset: null,
        rawData: null,
        cloud: null,
    })

    const defaultHighlightState = {
        frontend: null,
        backend: null,
        database: null,
        aiService: null,
        aiTraining: null,
        dataset: null,
        rawData: null,
        cloud: null,
    }

    function setHighlight(highlights: ServiceHighlight[]) {
        if (highlights.length === 0) {
            setHighlightState(defaultHighlightState)
            return
        }
        setHighlightState({
            frontend: highlights.includes('frontend'),
            backend: highlights.includes('backend'),
            database: highlights.includes('database'),
            aiService: highlights.includes('aiService'),
            aiTraining: highlights.includes('aiTraining'),
            dataset: highlights.includes('dataset'),
            rawData: highlights.includes('rawData'),
            cloud: highlights.includes('cloud'),
        })
    }
        
    return (
        <section className="mt-16 sm:mt-20">
            <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                {HOME_COPY.servicesTitle}
            </h2>
            <ServicesMap
                highlightFrontend={highlightState.frontend}
                highlightBackend={highlightState.backend}
                highlightDB={highlightState.database}
                highlightAIService={highlightState.aiService}
                highlightAITraining={highlightState.aiTraining}
                highlightDataset={highlightState.dataset}
                highlightRawData={highlightState.rawData}
                highlightCloud={highlightState.cloud}
            />
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.id} service={service} highlightFn={setHighlight} />
                ))}
            </div>
        </section>
    )
}