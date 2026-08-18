# Roadmap to box detectors with CNNs

## Preface

This roadmap assumes that you know the bases of Deep Learning and Convolutional Neural Networks. This includes topics like: Gradient Descent, SGD, ADAM-W, BatchNorm, LayerNorm, Data agumentation, basic loss functions such as BCE or MSE.

## List of papers we'll cover in order

### Part 1 — Multi-scale features, backbone & first integration (anchor-based era)
1. [FPN: Feature Pyramid Network for Object Detection](https://arxiv.org/pdf/1612.03144) — DEC 2016
2. [PANet: Path Aggregation Network](https://arxiv.org/pdf/1803.01534) — MAR 2018
3. [CSPNet: A New Backbone that can enhance learning capability of CNN](https://arxiv.org/pdf/1911.11929) — NOV 2019
4. [YOLOv4](https://arxiv.org/pdf/2004.10934) — APR 2020

### Part 2 — Loss design & label assignment (the anchor-free / assignment revolution)
5. [Focal Loss for Dense Object Detection (RetinaNet)](https://arxiv.org/pdf/1708.02002) — AUG 2017
6. [FCOS: Fully Convolutional One-Stage Object Detection](https://arxiv.org/pdf/1904.01355) — APR 2019
7. [ATSS: Bridging the Gap Between Anchor-based and Anchor-free Detection via Adaptive Training Sample Selection](https://arxiv.org/pdf/1912.02424) — DEC 2019
8. [Generalized Focal Loss](https://arxiv.org/pdf/2006.04388) — JUN 2020
9. [OTA: Optimal Transport Assignment for Object Detection](https://arxiv.org/pdf/2103.14259) — MAR 2021
10. [TOOD: Task-aligned One-stage Object Detection](https://arxiv.org/pdf/2108.07755) — AUG 2021

### Part 3 — The modern YOLO lineage (absorbing anchor-free + dynamic assignment)
11. [YOLOX: Exceeding YOLO Series in 2021](https://arxiv.org/pdf/2107.08430) — JUL 2021
12. [YOLOv7](https://arxiv.org/pdf/2207.02696) — JUL 2022
13. [YOLOv8: Real-Time Flying Object Detection](https://arxiv.org/pdf/2305.09972) — MAY 2023
14. [YOLOv9: Learning What You Want to Learn Using Programmable Gradient Information](https://arxiv.org/pdf/2402.13616) — FEB 2024
15. [YOLOv10](https://arxiv.org/pdf/2405.14458) — MAY 2024
16. [YOLOv12](https://arxiv.org/pdf/2502.12524) — FEB 2025
17. [YOLOv13 (unofficial)](https://arxiv.org/pdf/2506.17733) — JUN 2025
18. [YOLOv26](https://arxiv.org/pdf/2509.25164) — SEP 2025

## Introduction

In this blog we'll cover the main enhancements that will be relevant for understanding the modern CNN object detectors instead of attacking directly the last YOLO paper. You can start from the end, directly on YOLOv26 if you are confortable with top-down learning aproach. I do prefer for myself, understanding the historical incremental changed that have occured since 2019.

Here, we'll understand the different aproaches that exist for designing one-step object detectors for CNNs: the backbone, neck and detection heads, how anchor-free and NMS-free CNN models work and how to design generalized focal loss functions that attack directly the bounding box dimention statistical distributions. Also, we'll review several aproaches for dense images and small objects.

# Part 1 . The basics

## Introduction


# Part 2 . YOLO Evolution