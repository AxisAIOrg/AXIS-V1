window.AXIS_BROWSER_DATA = {
  "sourceSummary": {
    "cleanExportedTasks": 200,
    "cleanEpisodes": 32300,
    "cleanFrames": 3866294,
    "demoTasks": 200,
    "demoRecords": 200,
    "fallbackLocalTasks": [
      1058,
      1079,
      1080,
      1083,
      1084,
      1085,
      1088
    ],
    "missingDemoTasks": [],
    "videoFiles": 400,
    "fpsDefault": 30,
    "source": "axis-training/data_lerobot",
    "packagedVideoDir": "assets/videos/task-demos",
    "packagedVideoFiles": 400,
    "transcodedLargeSourceFiles": 14,
    "localDemoStats": {
      "source": "axis-training/data_lerobot/local",
      "taskDirectories": 230,
      "representedTasks": 200,
      "episodes": 140815,
      "frames": 17516172,
      "durationSeconds": 583872.4,
      "fpsDefault": 30,
      "excludedDirectories": {
        "variantfix": 19,
        "variant0Bad": 44
      }
    },
    "remoteUnrenderedStats": {
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "sourceMethod": "direct remote DB query using Web2RV verified trajectory filters: pass_verify attempts/trajectories, non-banned users, S3 trajectory present, no min_task_id, remote_threshold=0; filtered to task ids without rendered browser previews",
      "taskCount": 806,
      "trajectoryCount": 776498,
      "durationSeconds": 3219655.227462979,
      "estimatedDuration": true,
      "secondsPerTrajectory": 4.146379291978838,
      "durationEstimateMethod": "remote_verified_count * localDemoStats.durationSeconds / localDemoStats.episodes",
      "remoteFetchedAt": "2026-06-20T23:52:21.693176+00:00",
      "remoteTaskCountBeforeRenderedFilter": 1006,
      "remoteTrajectoryCountBeforeRenderedFilter": 1008527,
      "latestRemoteTrajectoryUpdatedAtMin": "2026-03-31T12:24:51.119275+00:00",
      "latestRemoteTrajectoryUpdatedAtMax": "2026-06-20T23:52:13.206440+00:00",
      "minTaskId": 22,
      "maxTaskId": 1619,
      "remoteThreshold": 0,
      "minTaskIdFilter": null
    },
    "combinedStats": {
      "tasks": 1006,
      "trajectories": 917313,
      "durationSeconds": 3803527.627462979,
      "estimatedDuration": true,
      "localTasks": 200,
      "remoteUnrenderedTasks": 806,
      "localTrajectories": 140815,
      "remoteUnrenderedTrajectories": 776498
    }
  },
  "tasks": [
    {
      "id": "AXIS-800",
      "taskId": 800,
      "title": "Put the Scissors on the Gift Box",
      "slug": "put_the_scissors_on_the_gift_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Scissors",
        "Gift Box"
      ],
      "source": "data_lerobot/clean/task_800_isaac_state_train",
      "description": "Real LeRobot demo for task 800: Put the Scissors on the Gift Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1791,
        "cleanEpisodes": 384,
        "cleanFrames": 83762,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-800-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-800-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-800-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_800_isaac_state_train",
        "episodes": 1791,
        "frames": 410283,
        "fps": 30,
        "durationSeconds": 13676.1
      }
    },
    {
      "id": "AXIS-801",
      "taskId": 801,
      "title": "Put the Tape on the Ribbon Roll",
      "slug": "put_the_tape_on_the_ribbon_roll",
      "category": "Placement",
      "difficulty": 2,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tape",
        "Ribbon Roll"
      ],
      "source": "data_lerobot/clean/task_801_isaac_state_train",
      "description": "Real LeRobot demo for task 801: Put the Tape on the Ribbon Roll. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1590,
        "cleanEpisodes": 188,
        "cleanFrames": 25149,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-801-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 134,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-801-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-801-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_801_isaac_state_train",
        "episodes": 1590,
        "frames": 200835,
        "fps": 30,
        "durationSeconds": 6694.5
      }
    },
    {
      "id": "AXIS-802",
      "taskId": 802,
      "title": "Put the Tape beside the Scissors",
      "slug": "put_the_tape_beside_the_scissors",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tape",
        "Scissors"
      ],
      "source": "data_lerobot/clean/task_802_isaac_state_train",
      "description": "Real LeRobot demo for task 802: Put the Tape beside the Scissors. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1490,
        "cleanEpisodes": 314,
        "cleanFrames": 27063,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-802-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 86,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-802-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-802-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_802_isaac_state_train",
        "episodes": 1490,
        "frames": 151010,
        "fps": 30,
        "durationSeconds": 5033.666666666667
      }
    },
    {
      "id": "AXIS-803",
      "taskId": 803,
      "title": "Put the Tape beside the Gift Box",
      "slug": "put_the_tape_beside_the_gift_box",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tape",
        "Gift Box"
      ],
      "source": "data_lerobot/clean/task_803_isaac_state_train",
      "description": "Real LeRobot demo for task 803: Put the Tape beside the Gift Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1831,
        "cleanEpisodes": 355,
        "cleanFrames": 37747,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-803-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-803-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-803-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_803_isaac_state_train",
        "episodes": 1831,
        "frames": 198011,
        "fps": 30,
        "durationSeconds": 6600.366666666667
      }
    },
    {
      "id": "AXIS-804",
      "taskId": 804,
      "title": "Put the Scissors beside the Ribbon Roll",
      "slug": "put_the_scissors_beside_the_ribbon_roll",
      "category": "Placement / relation",
      "difficulty": 5,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Scissors",
        "Ribbon Roll"
      ],
      "source": "data_lerobot/clean/task_804_isaac_state_train",
      "description": "Real LeRobot demo for task 804: Put the Scissors beside the Ribbon Roll. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 2710,
        "cleanEpisodes": 298,
        "cleanFrames": 37297,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-804-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-804-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-804-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_804_isaac_state_train",
        "episodes": 2710,
        "frames": 353472,
        "fps": 30,
        "durationSeconds": 11782.4
      }
    },
    {
      "id": "AXIS-806",
      "taskId": 806,
      "title": "Put the Juice on the Napkin Box",
      "slug": "put_the_juice_on_the_napkin_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Juice",
        "Napkin Box"
      ],
      "source": "data_lerobot/clean/task_806_isaac_state_train",
      "description": "Real LeRobot demo for task 806: Put the Juice on the Napkin Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1511,
        "cleanEpisodes": 105,
        "cleanFrames": 16532,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-806-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 157,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-806-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-806-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_806_isaac_state_train",
        "episodes": 1511,
        "frames": 227467,
        "fps": 30,
        "durationSeconds": 7582.233333333334
      }
    },
    {
      "id": "AXIS-807",
      "taskId": 807,
      "title": "Put the Sandwich on the Napkin Box",
      "slug": "put_the_sandwich_on_the_napkin_box",
      "category": "Placement",
      "difficulty": 2,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Napkin Box"
      ],
      "source": "data_lerobot/clean/task_807_isaac_state_train",
      "description": "Real LeRobot demo for task 807: Put the Sandwich on the Napkin Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1509,
        "cleanEpisodes": 137,
        "cleanFrames": 19232,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-807-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 140,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-807-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-807-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_807_isaac_state_train",
        "episodes": 1509,
        "frames": 244369,
        "fps": 30,
        "durationSeconds": 8145.633333333333
      }
    },
    {
      "id": "AXIS-808",
      "taskId": 808,
      "title": "Separate the Sandwich from the Apple",
      "slug": "separate_the_sandwich_from_the_apple",
      "category": "Separation",
      "difficulty": 3,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Apple"
      ],
      "source": "data_lerobot/clean/task_808_isaac_state_train",
      "description": "Real LeRobot demo for task 808: Separate the Sandwich from the Apple. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1373,
        "cleanEpisodes": 409,
        "cleanFrames": 51878,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-808-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-808-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-808-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_808_isaac_state_train",
        "episodes": 1373,
        "frames": 177127,
        "fps": 30,
        "durationSeconds": 5904.233333333334
      }
    },
    {
      "id": "AXIS-809",
      "taskId": 809,
      "title": "Separate the Sandwich from the Juice",
      "slug": "separate_the_sandwich_from_the_juice",
      "category": "Separation",
      "difficulty": 4,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Juice"
      ],
      "source": "data_lerobot/clean/task_809_isaac_state_train",
      "description": "Real LeRobot demo for task 809: Separate the Sandwich from the Juice. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 2944,
        "cleanEpisodes": 666,
        "cleanFrames": 59551,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-809-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-809-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-809-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_809_isaac_state_train",
        "episodes": 2944,
        "frames": 318210,
        "fps": 30,
        "durationSeconds": 10607
      }
    },
    {
      "id": "AXIS-810",
      "taskId": 810,
      "title": "Separate the Sandwich from the Napkin Box",
      "slug": "separate_the_sandwich_from_the_napkin_box",
      "category": "Separation",
      "difficulty": 5,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Napkin Box"
      ],
      "source": "data_lerobot/clean/task_810_isaac_state_train",
      "description": "Real LeRobot demo for task 810: Separate the Sandwich from the Napkin Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1841,
        "cleanEpisodes": 550,
        "cleanFrames": 72813,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-810-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-810-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-810-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_810_isaac_state_train",
        "episodes": 1841,
        "frames": 256648,
        "fps": 30,
        "durationSeconds": 8554.933333333332
      }
    },
    {
      "id": "AXIS-813",
      "taskId": 813,
      "title": "Place at target location",
      "slug": "place_at_target_location",
      "category": "Manipulation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place at target location"
      ],
      "source": "data_lerobot/clean/task_813_isaac_state_train",
      "description": "Real LeRobot demo for task 813: Place at target location. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1197,
        "cleanEpisodes": 826,
        "cleanFrames": 116621,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-813-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 141,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-813-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-813-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_813_isaac_state_train",
        "episodes": 1197,
        "frames": 154407,
        "fps": 30,
        "durationSeconds": 5146.9
      }
    },
    {
      "id": "AXIS-814",
      "taskId": 814,
      "title": "Place into container",
      "slug": "place_into_container",
      "category": "Manipulation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place",
        "container"
      ],
      "source": "data_lerobot/clean/task_814_isaac_state_train",
      "description": "Real LeRobot demo for task 814: Place into container. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1201,
        "cleanEpisodes": 929,
        "cleanFrames": 133587,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-814-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 144,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-814-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-814-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_814_isaac_state_train",
        "episodes": 1201,
        "frames": 162628,
        "fps": 30,
        "durationSeconds": 5420.933333333333
      }
    },
    {
      "id": "AXIS-815",
      "taskId": 815,
      "title": "Place with orientation",
      "slug": "place_with_orientation",
      "category": "Manipulation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place",
        "orientation"
      ],
      "source": "data_lerobot/clean/task_815_isaac_state_train",
      "description": "Real LeRobot demo for task 815: Place with orientation. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1190,
        "cleanEpisodes": 1179,
        "cleanFrames": 109221,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-815-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 93,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-815-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-815-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_815_isaac_state_train",
        "episodes": 1190,
        "frames": 110428,
        "fps": 30,
        "durationSeconds": 3680.9333333333334
      }
    },
    {
      "id": "AXIS-831",
      "taskId": 831,
      "title": "Place the Toy Figurine on the Right Side of the Toy Car",
      "slug": "place_the_toy_figurine_on_the_right_side_of_the_toy_car",
      "category": "Manipulation",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place  Toy Figurine",
        "Right Side of  Toy Car"
      ],
      "source": "data_lerobot/clean/task_831_isaac_state_train",
      "description": "Real LeRobot demo for task 831: Place the Toy Figurine on the Right Side of the Toy Car. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1242,
        "cleanEpisodes": 162,
        "cleanFrames": 24340,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-831-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 150,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-831-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-831-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_831_isaac_state_train",
        "episodes": 1242,
        "frames": 189582,
        "fps": 30,
        "durationSeconds": 6319.4
      }
    },
    {
      "id": "AXIS-840",
      "taskId": 840,
      "title": "Put the Potato on the Cutting Board",
      "slug": "put_the_potato_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Potato",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_840_isaac_state_train",
      "description": "Real LeRobot demo for task 840: Put the Potato on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 858,
        "cleanEpisodes": 96,
        "cleanFrames": 14826,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-840-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 154,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-840-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-840-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_840_isaac_state_train",
        "episodes": 858,
        "frames": 137465,
        "fps": 30,
        "durationSeconds": 4582.166666666667
      }
    },
    {
      "id": "AXIS-841",
      "taskId": 841,
      "title": "Put the Carrot on the Cutting Board",
      "slug": "put_the_carrot_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 1,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Carrot",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_841_isaac_state_train",
      "description": "Real LeRobot demo for task 841: Put the Carrot on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1006,
        "cleanEpisodes": 178,
        "cleanFrames": 18583,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-841-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-841-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-841-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_841_isaac_state_train",
        "episodes": 1006,
        "frames": 131885,
        "fps": 30,
        "durationSeconds": 4396.166666666667
      }
    },
    {
      "id": "AXIS-842",
      "taskId": 842,
      "title": "Put the Bowl on the Cutting Board",
      "slug": "put_the_bowl_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Bowl",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_842_isaac_state_train",
      "description": "Real LeRobot demo for task 842: Put the Bowl on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1115,
        "cleanEpisodes": 145,
        "cleanFrames": 15252,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-842-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 105,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-842-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-842-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_842_isaac_state_train",
        "episodes": 1115,
        "frames": 125158,
        "fps": 30,
        "durationSeconds": 4171.933333333333
      }
    },
    {
      "id": "AXIS-843",
      "taskId": 843,
      "title": "Put Both the Carrot and the Potato on the Cutting Board",
      "slug": "put_both_the_carrot_and_the_potato_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Both  Carrot",
        "Potato",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_843_isaac_state_train",
      "description": "Real LeRobot demo for task 843: Put Both the Carrot and the Potato on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 636,
        "cleanEpisodes": 149,
        "cleanFrames": 25443,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-843-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 171,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-843-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-843-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_843_isaac_state_train",
        "episodes": 636,
        "frames": 115737,
        "fps": 30,
        "durationSeconds": 3857.9
      }
    },
    {
      "id": "AXIS-844",
      "taskId": 844,
      "title": "Rotate the Carrot",
      "slug": "rotate_the_carrot",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Carrot"
      ],
      "source": "data_lerobot/clean/task_844_isaac_state_train",
      "description": "Real LeRobot demo for task 844: Rotate the Carrot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 809,
        "cleanEpisodes": 321,
        "cleanFrames": 59273,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-844-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 185,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-844-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-844-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_844_isaac_state_train",
        "episodes": 809,
        "frames": 145767,
        "fps": 30,
        "durationSeconds": 4858.9
      }
    },
    {
      "id": "AXIS-848",
      "taskId": 848,
      "title": "Put the Sausage in the Bowl",
      "slug": "put_the_sausage_in_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_848_isaac_state_train",
      "description": "Real LeRobot demo for task 848: Put the Sausage in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1217,
        "cleanEpisodes": 348,
        "cleanFrames": 40441,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-848-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 116,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-848-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-848-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_848_isaac_state_train",
        "episodes": 1217,
        "frames": 147068,
        "fps": 30,
        "durationSeconds": 4902.266666666666
      }
    },
    {
      "id": "AXIS-849",
      "taskId": 849,
      "title": "Put the Sausage on the Cereal Box",
      "slug": "put_the_sausage_on_the_cereal_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Cereal Box"
      ],
      "source": "data_lerobot/clean/task_849_isaac_state_train",
      "description": "Real LeRobot demo for task 849: Put the Sausage on the Cereal Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 87,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-849-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 87,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-849-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-849-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_849_isaac_state_train",
        "episodes": 10,
        "frames": 5713,
        "fps": 30,
        "durationSeconds": 190.43333333333334
      }
    },
    {
      "id": "AXIS-850",
      "taskId": 850,
      "title": "Put the Sausage on the Milk Carton",
      "slug": "put_the_sausage_on_the_milk_carton",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Milk Carton"
      ],
      "source": "data_lerobot/clean/task_850_isaac_state_train",
      "description": "Real LeRobot demo for task 850: Put the Sausage on the Milk Carton. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1197,
        "cleanEpisodes": 164,
        "cleanFrames": 31069,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-850-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 189,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-850-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-850-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_850_isaac_state_train",
        "episodes": 1197,
        "frames": 210704,
        "fps": 30,
        "durationSeconds": 7023.466666666666
      }
    },
    {
      "id": "AXIS-851",
      "taskId": 851,
      "title": "Put the Sausage beside the Bowl",
      "slug": "put_the_sausage_beside_the_bowl",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_851_isaac_state_train",
      "description": "Real LeRobot demo for task 851: Put the Sausage beside the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1129,
        "cleanEpisodes": 113,
        "cleanFrames": 11331,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-851-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 100,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-851-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-851-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_851_isaac_state_train",
        "episodes": 1129,
        "frames": 123230,
        "fps": 30,
        "durationSeconds": 4107.666666666667
      }
    },
    {
      "id": "AXIS-852",
      "taskId": 852,
      "title": "Rotate the Sausage",
      "slug": "rotate_the_sausage",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage"
      ],
      "source": "data_lerobot/clean/task_852_isaac_state_train",
      "description": "Real LeRobot demo for task 852: Rotate the Sausage. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 174,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-852-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 174,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-852-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-852-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_852_isaac_state_train",
        "episodes": 10,
        "frames": 2042,
        "fps": 30,
        "durationSeconds": 68.06666666666666
      }
    },
    {
      "id": "AXIS-853",
      "taskId": 853,
      "title": "Rotate the Sausage 2",
      "slug": "rotate_the_sausage_2",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage 2"
      ],
      "source": "data_lerobot/clean/task_853_isaac_state_train",
      "description": "Real LeRobot demo for task 853: Rotate the Sausage 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 813,
        "cleanEpisodes": 240,
        "cleanFrames": 39568,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-853-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-853-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-853-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_853_isaac_state_train",
        "episodes": 813,
        "frames": 137992,
        "fps": 30,
        "durationSeconds": 4599.733333333334
      }
    },
    {
      "id": "AXIS-854",
      "taskId": 854,
      "title": "Put the Toy Ball in the Pet Bowl",
      "slug": "put_the_toy_ball_in_the_pet_bowl",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Ball",
        "Pet Bowl"
      ],
      "source": "data_lerobot/clean/task_854_isaac_state_train",
      "description": "Real LeRobot demo for task 854: Put the Toy Ball in the Pet Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 124,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-854-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 124,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-854-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-854-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_854_isaac_state_train",
        "episodes": 10,
        "frames": 3297,
        "fps": 30,
        "durationSeconds": 109.9
      }
    },
    {
      "id": "AXIS-855",
      "taskId": 855,
      "title": "Put the Chew Toy in the Pet Bowl",
      "slug": "put_the_chew_toy_in_the_pet_bowl",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Pet Bowl"
      ],
      "source": "data_lerobot/clean/task_855_isaac_state_train",
      "description": "Real LeRobot demo for task 855: Put the Chew Toy in the Pet Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1075,
        "cleanEpisodes": 61,
        "cleanFrames": 6833,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-855-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-855-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-855-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_855_isaac_state_train",
        "episodes": 1075,
        "frames": 109725,
        "fps": 30,
        "durationSeconds": 3657.5
      }
    },
    {
      "id": "AXIS-857",
      "taskId": 857,
      "title": "Put the Toy Ball beside the Bowl",
      "slug": "put_the_toy_ball_beside_the_bowl",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Ball",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_857_isaac_state_train",
      "description": "Real LeRobot demo for task 857: Put the Toy Ball beside the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 80,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-857-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 40,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-857-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-857-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_857_isaac_state_train",
        "episodes": 10,
        "frames": 1664,
        "fps": 30,
        "durationSeconds": 55.46666666666667
      }
    },
    {
      "id": "AXIS-858",
      "taskId": 858,
      "title": "Separate the Chew Toy from the Toy Ball",
      "slug": "separate_the_chew_toy_from_the_toy_ball",
      "category": "Separation",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Toy Ball"
      ],
      "source": "data_lerobot/clean/task_858_isaac_state_train",
      "description": "Real LeRobot demo for task 858: Separate the Chew Toy from the Toy Ball. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 917,
        "cleanEpisodes": 336,
        "cleanFrames": 30845,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-858-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-858-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-858-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_858_isaac_state_train",
        "episodes": 917,
        "frames": 88252,
        "fps": 30,
        "durationSeconds": 2941.733333333333
      }
    },
    {
      "id": "AXIS-859",
      "taskId": 859,
      "title": "Put the Chew Toy on the Right Side of the Bowl",
      "slug": "put_the_chew_toy_on_the_right_side_of_the_bowl",
      "category": "Placement",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Right Side of the Bowl"
      ],
      "source": "data_lerobot/clean/task_859_isaac_state_train",
      "description": "Real LeRobot demo for task 859: Put the Chew Toy on the Right Side of the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1197,
        "cleanEpisodes": 53,
        "cleanFrames": 5084,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-859-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 96,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-859-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-859-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_859_isaac_state_train",
        "episodes": 1197,
        "frames": 127626,
        "fps": 30,
        "durationSeconds": 4254.2
      }
    },
    {
      "id": "AXIS-862",
      "taskId": 862,
      "title": "Put the Mouse on the Keyboard",
      "slug": "put_the_mouse_on_the_keyboard",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Mouse",
        "Keyboard"
      ],
      "source": "data_lerobot/clean/task_862_isaac_state_train",
      "description": "Real LeRobot demo for task 862: Put the Mouse on the Keyboard. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1036,
        "cleanEpisodes": 114,
        "cleanFrames": 11701,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-862-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 103,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-862-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-862-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_862_isaac_state_train",
        "episodes": 1036,
        "frames": 110251,
        "fps": 30,
        "durationSeconds": 3675.0333333333333
      }
    },
    {
      "id": "AXIS-863",
      "taskId": 863,
      "title": "Put the Cable on the Keyboard",
      "slug": "put_the_cable_on_the_keyboard",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cable",
        "Keyboard"
      ],
      "source": "data_lerobot/clean/task_863_isaac_state_train",
      "description": "Real LeRobot demo for task 863: Put the Cable on the Keyboard. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 893,
        "cleanEpisodes": 5,
        "cleanFrames": 610,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-863-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 122,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-863-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-863-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_863_isaac_state_train",
        "episodes": 893,
        "frames": 147379,
        "fps": 30,
        "durationSeconds": 4912.633333333333
      }
    },
    {
      "id": "AXIS-864",
      "taskId": 864,
      "title": "Put the Mouse on the Phone",
      "slug": "put_the_mouse_on_the_phone",
      "category": "Placement",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Mouse",
        "Phone"
      ],
      "source": "data_lerobot/clean/task_864_isaac_state_train",
      "description": "Real LeRobot demo for task 864: Put the Mouse on the Phone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 994,
        "cleanEpisodes": 55,
        "cleanFrames": 6669,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-864-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 121,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-864-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-864-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_864_isaac_state_train",
        "episodes": 994,
        "frames": 110944,
        "fps": 30,
        "durationSeconds": 3698.133333333333
      }
    },
    {
      "id": "AXIS-865",
      "taskId": 865,
      "title": "Put the Cable on the Phone",
      "slug": "put_the_cable_on_the_phone",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cable",
        "Phone"
      ],
      "source": "data_lerobot/clean/task_865_isaac_state_train",
      "description": "Real LeRobot demo for task 865: Put the Cable on the Phone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 854,
        "cleanEpisodes": 20,
        "cleanFrames": 4361,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-865-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-865-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-865-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_865_isaac_state_train",
        "episodes": 854,
        "frames": 111779,
        "fps": 30,
        "durationSeconds": 3725.9666666666667
      }
    },
    {
      "id": "AXIS-866",
      "taskId": 866,
      "title": "Rotate the Computer Mouse",
      "slug": "rotate_the_computer_mouse",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse"
      ],
      "source": "data_lerobot/clean/task_866_isaac_state_train",
      "description": "Real LeRobot demo for task 866: Rotate the Computer Mouse. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 855,
        "cleanEpisodes": 143,
        "cleanFrames": 17009,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-866-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 119,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-866-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-866-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_866_isaac_state_train",
        "episodes": 855,
        "frames": 110412,
        "fps": 30,
        "durationSeconds": 3680.4
      }
    },
    {
      "id": "AXIS-867",
      "taskId": 867,
      "title": "Put the Computer Mouse on the Right of the Phone",
      "slug": "put_the_computer_mouse_on_the_right_of_the_phone",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Right of the Phone"
      ],
      "source": "data_lerobot/clean/task_867_isaac_state_train",
      "description": "Real LeRobot demo for task 867: Put the Computer Mouse on the Right of the Phone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 777,
        "cleanEpisodes": 51,
        "cleanFrames": 7217,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-867-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 142,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-867-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-867-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_867_isaac_state_train",
        "episodes": 777,
        "frames": 104018,
        "fps": 30,
        "durationSeconds": 3467.266666666667
      }
    },
    {
      "id": "AXIS-875",
      "taskId": 875,
      "title": "Put the Cup on the Toolbox",
      "slug": "put_the_cup_on_the_toolbox",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_875_isaac_state_train",
      "description": "Real LeRobot demo for task 875: Put the Cup on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1045,
        "cleanEpisodes": 153,
        "cleanFrames": 18620,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-875-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 122,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-875-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-875-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_875_isaac_state_train",
        "episodes": 1045,
        "frames": 132045,
        "fps": 30,
        "durationSeconds": 4401.5
      }
    },
    {
      "id": "AXIS-876",
      "taskId": 876,
      "title": "Rotate the Hammer",
      "slug": "rotate_the_hammer",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer"
      ],
      "source": "data_lerobot/clean/task_876_isaac_state_train",
      "description": "Real LeRobot demo for task 876: Rotate the Hammer. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 123,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-876-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 62,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-876-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-876-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_876_isaac_state_train",
        "episodes": 10,
        "frames": 1877,
        "fps": 30,
        "durationSeconds": 62.56666666666667
      }
    },
    {
      "id": "AXIS-877",
      "taskId": 877,
      "title": "Rotate the Hammer 2",
      "slug": "rotate_the_hammer_2",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer 2"
      ],
      "source": "data_lerobot/clean/task_877_isaac_state_train",
      "description": "Real LeRobot demo for task 877: Rotate the Hammer 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 1565,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-877-DEMO",
          "collector": "clean LeRobot export",
          "duration": "26s",
          "durationSeconds": 26,
          "frames": 782,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-877-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-877-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_877_isaac_state_train",
        "episodes": 10,
        "frames": 2419,
        "fps": 30,
        "durationSeconds": 80.63333333333334
      }
    },
    {
      "id": "AXIS-878",
      "taskId": 878,
      "title": "Put the Hammer on the Right side of the Cup",
      "slug": "put_the_hammer_on_the_right_side_of_the_cup",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer",
        "Right side of the Cup"
      ],
      "source": "data_lerobot/clean/task_878_isaac_state_train",
      "description": "Real LeRobot demo for task 878: Put the Hammer on the Right side of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 1753,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-878-DEMO",
          "collector": "clean LeRobot export",
          "duration": "29s",
          "durationSeconds": 29,
          "frames": 876,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-878-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-878-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_878_isaac_state_train",
        "episodes": 10,
        "frames": 2666,
        "fps": 30,
        "durationSeconds": 88.86666666666666
      }
    },
    {
      "id": "AXIS-879",
      "taskId": 879,
      "title": "Put the Hammer on the Left side of the Cup",
      "slug": "put_the_hammer_on_the_left_side_of_the_cup",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer",
        "Left side of the Cup"
      ],
      "source": "data_lerobot/clean/task_879_isaac_state_train",
      "description": "Real LeRobot demo for task 879: Put the Hammer on the Left side of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 224,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-879-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-879-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-879-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_879_isaac_state_train",
        "episodes": 10,
        "frames": 2275,
        "fps": 30,
        "durationSeconds": 75.83333333333333
      }
    },
    {
      "id": "AXIS-880",
      "taskId": 880,
      "title": "Put the Eyeglasses on the Notebook",
      "slug": "put_the_eyeglasses_on_the_notebook",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_880_isaac_state_train",
      "description": "Real LeRobot demo for task 880: Put the Eyeglasses on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 3,
        "cleanFrames": 2800,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-880-DEMO",
          "collector": "clean LeRobot export",
          "duration": "31s",
          "durationSeconds": 31,
          "frames": 933,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-880-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-880-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_880_isaac_state_train",
        "episodes": 10,
        "frames": 3687,
        "fps": 30,
        "durationSeconds": 122.9
      }
    },
    {
      "id": "AXIS-881",
      "taskId": 881,
      "title": "Put the Cup on the Notebook",
      "slug": "put_the_cup_on_the_notebook",
      "category": "Placement",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_881_isaac_state_train",
      "description": "Real LeRobot demo for task 881: Put the Cup on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 70,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-881-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 70,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-881-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-881-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_881_isaac_state_train",
        "episodes": 10,
        "frames": 1530,
        "fps": 30,
        "durationSeconds": 51
      }
    },
    {
      "id": "AXIS-882",
      "taskId": 882,
      "title": "Put the Eyeglasses Case on the Notebook",
      "slug": "put_the_eyeglasses_case_on_the_notebook",
      "category": "Placement",
      "difficulty": 4,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_882_isaac_state_train",
      "description": "Real LeRobot demo for task 882: Put the Eyeglasses Case on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 195,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-882-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 98,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-882-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-882-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_882_isaac_state_train",
        "episodes": 10,
        "frames": 1525,
        "fps": 30,
        "durationSeconds": 50.833333333333336
      }
    },
    {
      "id": "AXIS-883",
      "taskId": 883,
      "title": "Rotate the Case",
      "slug": "rotate_the_case",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Case"
      ],
      "source": "data_lerobot/clean/task_883_isaac_state_train",
      "description": "Real LeRobot demo for task 883: Rotate the Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 904,
        "cleanEpisodes": 372,
        "cleanFrames": 48846,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-883-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 131,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-883-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-883-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_883_isaac_state_train",
        "episodes": 904,
        "frames": 108914,
        "fps": 30,
        "durationSeconds": 3630.4666666666667
      }
    },
    {
      "id": "AXIS-884",
      "taskId": 884,
      "title": "Rotate the Case 2",
      "slug": "rotate_the_case_2",
      "category": "Rotation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Case 2"
      ],
      "source": "data_lerobot/clean/task_884_isaac_state_train",
      "description": "Real LeRobot demo for task 884: Rotate the Case 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 893,
        "cleanEpisodes": 373,
        "cleanFrames": 47581,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-884-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 128,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-884-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-884-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_884_isaac_state_train",
        "episodes": 893,
        "frames": 107335,
        "fps": 30,
        "durationSeconds": 3577.8333333333335
      }
    },
    {
      "id": "AXIS-885",
      "taskId": 885,
      "title": "Put the Eyeglasses Case on the Right of the Cup",
      "slug": "put_the_eyeglasses_case_on_the_right_of_the_cup",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case",
        "Right of the Cup"
      ],
      "source": "data_lerobot/clean/task_885_isaac_state_train",
      "description": "Real LeRobot demo for task 885: Put the Eyeglasses Case on the Right of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 118,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-885-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-885-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-885-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_885_isaac_state_train",
        "episodes": 10,
        "frames": 2277,
        "fps": 30,
        "durationSeconds": 75.9
      }
    },
    {
      "id": "AXIS-886",
      "taskId": 886,
      "title": "Put the Soap on the Soap Dish",
      "slug": "put_the_soap_on_the_soap_dish",
      "category": "Placement",
      "difficulty": 3,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap",
        "Soap Dish"
      ],
      "source": "data_lerobot/clean/task_886_isaac_state_train",
      "description": "Real LeRobot demo for task 886: Put the Soap on the Soap Dish. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 866,
        "cleanEpisodes": 151,
        "cleanFrames": 14804,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-886-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 98,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-886-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-886-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_886_isaac_state_train",
        "episodes": 866,
        "frames": 102544,
        "fps": 30,
        "durationSeconds": 3418.133333333333
      }
    },
    {
      "id": "AXIS-887",
      "taskId": 887,
      "title": "Put the Cup on the Soap Dish",
      "slug": "put_the_cup_on_the_soap_dish",
      "category": "Placement",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Soap Dish"
      ],
      "source": "data_lerobot/clean/task_887_isaac_state_train",
      "description": "Real LeRobot demo for task 887: Put the Cup on the Soap Dish. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 974,
        "cleanEpisodes": 231,
        "cleanFrames": 25502,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-887-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 110,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-887-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-887-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_887_isaac_state_train",
        "episodes": 974,
        "frames": 113136,
        "fps": 30,
        "durationSeconds": 3771.2
      }
    },
    {
      "id": "AXIS-888",
      "taskId": 888,
      "title": "Insert the Toothpaste into the Cup",
      "slug": "insert_the_toothpaste_into_the_cup",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toothpaste",
        "Cup"
      ],
      "source": "data_lerobot/clean/task_888_isaac_state_train",
      "description": "Real LeRobot demo for task 888: Insert the Toothpaste into the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 189,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-888-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 94,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-888-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-888-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_888_isaac_state_train",
        "episodes": 10,
        "frames": 2236,
        "fps": 30,
        "durationSeconds": 74.53333333333333
      }
    },
    {
      "id": "AXIS-889",
      "taskId": 889,
      "title": "Put the Toothpaste on the Soap Dish",
      "slug": "put_the_toothpaste_on_the_soap_dish",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toothpaste",
        "Soap Dish"
      ],
      "source": "data_lerobot/clean/task_889_isaac_state_train",
      "description": "Real LeRobot demo for task 889: Put the Toothpaste on the Soap Dish. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 840,
        "cleanEpisodes": 176,
        "cleanFrames": 21268,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-889-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 121,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-889-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-889-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_889_isaac_state_train",
        "episodes": 840,
        "frames": 95759,
        "fps": 30,
        "durationSeconds": 3191.9666666666667
      }
    },
    {
      "id": "AXIS-891",
      "taskId": 891,
      "title": "Rotate the Soap",
      "slug": "rotate_the_soap",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap"
      ],
      "source": "data_lerobot/clean/task_891_isaac_state_train",
      "description": "Real LeRobot demo for task 891: Rotate the Soap. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 971,
        "cleanEpisodes": 374,
        "cleanFrames": 36830,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-891-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 98,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-891-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-891-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_891_isaac_state_train",
        "episodes": 971,
        "frames": 101483,
        "fps": 30,
        "durationSeconds": 3382.766666666667
      }
    },
    {
      "id": "AXIS-892",
      "taskId": 892,
      "title": "Stack the Cup on the Cube Block (F)",
      "slug": "stack_the_cup_on_the_cube_block_f",
      "category": "Manipulation",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Stack  Cup",
        "Cube Block (F)"
      ],
      "source": "data_lerobot/clean/task_892_isaac_state_train",
      "description": "Real LeRobot demo for task 892: Stack the Cup on the Cube Block (F). This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 730,
        "cleanEpisodes": 489,
        "cleanFrames": 40571,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-892-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 83,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-892-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-892-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_892_isaac_state_train",
        "episodes": 730,
        "frames": 61190,
        "fps": 30,
        "durationSeconds": 2039.6666666666667
      }
    },
    {
      "id": "AXIS-894",
      "taskId": 894,
      "title": "Put the Watch on the Box",
      "slug": "put_the_watch_on_the_box",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Watch",
        "Box"
      ],
      "source": "data_lerobot/clean/task_894_isaac_state_train",
      "description": "Real LeRobot demo for task 894: Put the Watch on the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 911,
        "cleanEpisodes": 35,
        "cleanFrames": 6319,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-894-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 181,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-894-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-894-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_894_isaac_state_train",
        "episodes": 911,
        "frames": 136744,
        "fps": 30,
        "durationSeconds": 4558.133333333333
      }
    },
    {
      "id": "AXIS-895",
      "taskId": 895,
      "title": "Put the Bracelet on the Box",
      "slug": "put_the_bracelet_on_the_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "jewelry_table",
      "baseScene": "jewelry_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Bracelet",
        "Box"
      ],
      "source": "data_lerobot/clean/task_895_isaac_state_train",
      "description": "Real LeRobot demo for task 895: Put the Bracelet on the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 1994,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-895-DEMO",
          "collector": "clean LeRobot export",
          "duration": "33s",
          "durationSeconds": 33,
          "frames": 997,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-895-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-895-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_895_isaac_state_train",
        "episodes": 10,
        "frames": 3315,
        "fps": 30,
        "durationSeconds": 110.5
      }
    },
    {
      "id": "AXIS-896",
      "taskId": 896,
      "title": "Put the Cup on the Box",
      "slug": "put_the_cup_on_the_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Box"
      ],
      "source": "data_lerobot/clean/task_896_isaac_state_train",
      "description": "Real LeRobot demo for task 896: Put the Cup on the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 31,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-896-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 31,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-896-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-896-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_896_isaac_state_train",
        "episodes": 10,
        "frames": 1731,
        "fps": 30,
        "durationSeconds": 57.7
      }
    },
    {
      "id": "AXIS-897",
      "taskId": 897,
      "title": "Put the Cup on the Right Side of the Box",
      "slug": "put_the_cup_on_the_right_side_of_the_box",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Right Side of the Box"
      ],
      "source": "data_lerobot/clean/task_897_isaac_state_train",
      "description": "Real LeRobot demo for task 897: Put the Cup on the Right Side of the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 930,
        "cleanEpisodes": 143,
        "cleanFrames": 14740,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-897-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 103,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-897-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-897-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_897_isaac_state_train",
        "episodes": 930,
        "frames": 99303,
        "fps": 30,
        "durationSeconds": 3310.1
      }
    },
    {
      "id": "AXIS-899",
      "taskId": 899,
      "title": "Put the Cup in front of the Box",
      "slug": "put_the_cup_in_front_of_the_box",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "front of  Box"
      ],
      "source": "data_lerobot/clean/task_899_isaac_state_train",
      "description": "Real LeRobot demo for task 899: Put the Cup in front of the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1044,
        "cleanEpisodes": 133,
        "cleanFrames": 14612,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-899-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 110,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-899-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-899-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_899_isaac_state_train",
        "episodes": 1044,
        "frames": 107661,
        "fps": 30,
        "durationSeconds": 3588.7
      }
    },
    {
      "id": "AXIS-900",
      "taskId": 900,
      "title": "Put the Croissant on the Plate",
      "slug": "put_the_croissant_on_the_plate",
      "category": "Placement",
      "difficulty": 4,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Croissant",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_900_isaac_state_train",
      "description": "Real LeRobot demo for task 900: Put the Croissant on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1169,
        "cleanEpisodes": 102,
        "cleanFrames": 14523,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-900-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 142,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-900-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-900-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_900_isaac_state_train",
        "episodes": 1169,
        "frames": 140252,
        "fps": 30,
        "durationSeconds": 4675.066666666667
      }
    },
    {
      "id": "AXIS-901",
      "taskId": 901,
      "title": "Put the Tomato on the Plate",
      "slug": "put_the_tomato_on_the_plate",
      "category": "Placement",
      "difficulty": 5,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tomato",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_901_isaac_state_train",
      "description": "Real LeRobot demo for task 901: Put the Tomato on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 948,
        "cleanEpisodes": 52,
        "cleanFrames": 6115,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-901-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-901-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-901-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_901_isaac_state_train",
        "episodes": 948,
        "frames": 135772,
        "fps": 30,
        "durationSeconds": 4525.733333333334
      }
    },
    {
      "id": "AXIS-902",
      "taskId": 902,
      "title": "Put the Croissant in the Pan",
      "slug": "put_the_croissant_in_the_pan",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Croissant",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_902_isaac_state_train",
      "description": "Real LeRobot demo for task 902: Put the Croissant in the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 987,
        "cleanEpisodes": 37,
        "cleanFrames": 3900,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-902-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 105,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-902-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-902-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_902_isaac_state_train",
        "episodes": 987,
        "frames": 139401,
        "fps": 30,
        "durationSeconds": 4646.7
      }
    },
    {
      "id": "AXIS-903",
      "taskId": 903,
      "title": "Put the Tomato in the Pan",
      "slug": "put_the_tomato_in_the_pan",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tomato",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_903_isaac_state_train",
      "description": "Real LeRobot demo for task 903: Put the Tomato in the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 271,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-903-DEMO",
          "collector": "clean LeRobot export",
          "duration": "9s",
          "durationSeconds": 9,
          "frames": 271,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-903-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-903-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_903_isaac_state_train",
        "episodes": 10,
        "frames": 2949,
        "fps": 30,
        "durationSeconds": 98.3
      }
    },
    {
      "id": "AXIS-904",
      "taskId": 904,
      "title": "Rotate the Pan",
      "slug": "rotate_the_pan",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pan"
      ],
      "source": "data_lerobot/clean/task_904_isaac_state_train",
      "description": "Real LeRobot demo for task 904: Rotate the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 923,
        "cleanEpisodes": 73,
        "cleanFrames": 7678,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-904-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 105,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-904-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-904-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_904_isaac_state_train",
        "episodes": 923,
        "frames": 95704,
        "fps": 30,
        "durationSeconds": 3190.133333333333
      }
    },
    {
      "id": "AXIS-905",
      "taskId": 905,
      "title": "Rotate the Pan 2",
      "slug": "rotate_the_pan_2",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pan 2"
      ],
      "source": "data_lerobot/clean/task_905_isaac_state_train",
      "description": "Real LeRobot demo for task 905: Rotate the Pan 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 927,
        "cleanEpisodes": 47,
        "cleanFrames": 6246,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-905-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 133,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-905-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-905-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_905_isaac_state_train",
        "episodes": 927,
        "frames": 117980,
        "fps": 30,
        "durationSeconds": 3932.6666666666665
      }
    },
    {
      "id": "AXIS-918",
      "taskId": 918,
      "title": "Put the Butter Block into the Bowl",
      "slug": "put_the_butter_block_into_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Butter Block",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_918_isaac_state_train",
      "description": "Real LeRobot demo for task 918: Put the Butter Block into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1198,
        "cleanEpisodes": 172,
        "cleanFrames": 25535,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-918-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 148,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-918-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-918-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_918_isaac_state_train",
        "episodes": 1198,
        "frames": 164528,
        "fps": 30,
        "durationSeconds": 5484.266666666666
      }
    },
    {
      "id": "AXIS-920",
      "taskId": 920,
      "title": "Put the Butter Block on the Bread",
      "slug": "put_the_butter_block_on_the_bread",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Butter Block",
        "Bread"
      ],
      "source": "data_lerobot/clean/task_920_isaac_state_train",
      "description": "Real LeRobot demo for task 920: Put the Butter Block on the Bread. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1001,
        "cleanEpisodes": 115,
        "cleanFrames": 21822,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-920-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 190,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-920-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-920-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_920_isaac_state_train",
        "episodes": 1001,
        "frames": 175298,
        "fps": 30,
        "durationSeconds": 5843.266666666666
      }
    },
    {
      "id": "AXIS-921",
      "taskId": 921,
      "title": "Rotate the Rolling Pin",
      "slug": "rotate_the_rolling_pin",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rolling Pin"
      ],
      "source": "data_lerobot/clean/task_921_isaac_state_train",
      "description": "Real LeRobot demo for task 921: Rotate the Rolling Pin. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1031,
        "cleanEpisodes": 298,
        "cleanFrames": 43411,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-921-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 146,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-921-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-921-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_921_isaac_state_train",
        "episodes": 1031,
        "frames": 142021,
        "fps": 30,
        "durationSeconds": 4734.033333333334
      }
    },
    {
      "id": "AXIS-922",
      "taskId": 922,
      "title": "Rotate the Rolling Pin 2",
      "slug": "rotate_the_rolling_pin_2",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rolling Pin 2"
      ],
      "source": "data_lerobot/clean/task_922_isaac_state_train",
      "description": "Real LeRobot demo for task 922: Rotate the Rolling Pin 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1105,
        "cleanEpisodes": 359,
        "cleanFrames": 48770,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-922-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 136,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-922-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-922-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_922_isaac_state_train",
        "episodes": 1105,
        "frames": 141862,
        "fps": 30,
        "durationSeconds": 4728.733333333334
      }
    },
    {
      "id": "AXIS-923",
      "taskId": 923,
      "title": "Put the Rolling Pin on the Right Side of the Bread",
      "slug": "put_the_rolling_pin_on_the_right_side_of_the_bread",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rolling Pin",
        "Right Side of the Bread"
      ],
      "source": "data_lerobot/clean/task_923_isaac_state_train",
      "description": "Real LeRobot demo for task 923: Put the Rolling Pin on the Right Side of the Bread. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 92,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-923-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-923-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-923-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_923_isaac_state_train",
        "episodes": 10,
        "frames": 2345,
        "fps": 30,
        "durationSeconds": 78.16666666666667
      }
    },
    {
      "id": "AXIS-927",
      "taskId": 927,
      "title": "Put the Tea Cup on the Biscuit Box",
      "slug": "put_the_tea_cup_on_the_biscuit_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tea Cup",
        "Biscuit Box"
      ],
      "source": "data_lerobot/clean/task_927_isaac_state_train",
      "description": "Real LeRobot demo for task 927: Put the Tea Cup on the Biscuit Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1053,
        "cleanEpisodes": 204,
        "cleanFrames": 26223,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-927-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 129,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-927-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-927-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_927_isaac_state_train",
        "episodes": 1053,
        "frames": 148450,
        "fps": 30,
        "durationSeconds": 4948.333333333333
      }
    },
    {
      "id": "AXIS-928",
      "taskId": 928,
      "title": "Put the Cup on the Right Side of the Biscuit Box",
      "slug": "put_the_cup_on_the_right_side_of_the_biscuit_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Right Side of the Biscuit Box"
      ],
      "source": "data_lerobot/clean/task_928_isaac_state_train",
      "description": "Real LeRobot demo for task 928: Put the Cup on the Right Side of the Biscuit Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 81,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-928-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 81,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-928-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-928-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_928_isaac_state_train",
        "episodes": 10,
        "frames": 2070,
        "fps": 30,
        "durationSeconds": 69
      }
    },
    {
      "id": "AXIS-930",
      "taskId": 930,
      "title": "Rotate the Tea Pot",
      "slug": "rotate_the_tea_pot",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tea Pot"
      ],
      "source": "data_lerobot/clean/task_930_isaac_state_train",
      "description": "Real LeRobot demo for task 930: Rotate the Tea Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 994,
        "cleanEpisodes": 81,
        "cleanFrames": 9563,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-930-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-930-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-930-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_930_isaac_state_train",
        "episodes": 994,
        "frames": 115815,
        "fps": 30,
        "durationSeconds": 3860.5
      }
    },
    {
      "id": "AXIS-937",
      "taskId": 937,
      "title": "Put the Croissant on the Plate",
      "slug": "put_the_croissant_on_the_plate",
      "category": "Placement",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Croissant",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_937_isaac_state_train",
      "description": "Real LeRobot demo for task 937: Put the Croissant on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1077,
        "cleanEpisodes": 214,
        "cleanFrames": 27952,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-937-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 131,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-937-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-937-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_937_isaac_state_train",
        "episodes": 1077,
        "frames": 128256,
        "fps": 30,
        "durationSeconds": 4275.2
      }
    },
    {
      "id": "AXIS-938",
      "taskId": 938,
      "title": "Put the Jam on the Plate",
      "slug": "put_the_jam_on_the_plate",
      "category": "Placement",
      "difficulty": 4,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Jam",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_938_isaac_state_train",
      "description": "Real LeRobot demo for task 938: Put the Jam on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1220,
        "cleanEpisodes": 571,
        "cleanFrames": 59648,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-938-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-938-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-938-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_938_isaac_state_train",
        "episodes": 1220,
        "frames": 139400,
        "fps": 30,
        "durationSeconds": 4646.666666666667
      }
    },
    {
      "id": "AXIS-939",
      "taskId": 939,
      "title": "Put the Cup on the Plate",
      "slug": "put_the_cup_on_the_plate",
      "category": "Placement",
      "difficulty": 5,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_939_isaac_state_train",
      "description": "Real LeRobot demo for task 939: Put the Cup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 111,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-939-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 56,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-939-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-939-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_939_isaac_state_train",
        "episodes": 10,
        "frames": 1228,
        "fps": 30,
        "durationSeconds": 40.93333333333333
      }
    },
    {
      "id": "AXIS-940",
      "taskId": 940,
      "title": "Put both the Croissant and the Cup on the Plate",
      "slug": "put_both_the_croissant_and_the_cup_on_the_plate",
      "category": "Placement",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Croissant",
        "Cup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_940_isaac_state_train",
      "description": "Real LeRobot demo for task 940: Put both the Croissant and the Cup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 530,
        "cleanEpisodes": 255,
        "cleanFrames": 38061,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-940-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 149,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-940-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-940-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_940_isaac_state_train",
        "episodes": 530,
        "frames": 72784,
        "fps": 30,
        "durationSeconds": 2426.133333333333
      }
    },
    {
      "id": "AXIS-941",
      "taskId": 941,
      "title": "Put both the Croissant and the Jam on the Plate",
      "slug": "put_both_the_croissant_and_the_jam_on_the_plate",
      "category": "Placement",
      "difficulty": 2,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Croissant",
        "Jam",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_941_isaac_state_train",
      "description": "Real LeRobot demo for task 941: Put both the Croissant and the Jam on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 378,
        "cleanEpisodes": 96,
        "cleanFrames": 14262,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-941-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 149,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-941-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-941-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_941_isaac_state_train",
        "episodes": 378,
        "frames": 56399,
        "fps": 30,
        "durationSeconds": 1879.9666666666667
      }
    },
    {
      "id": "AXIS-942",
      "taskId": 942,
      "title": "Put both the Jam and the Cup on the Plate",
      "slug": "put_both_the_jam_and_the_cup_on_the_plate",
      "category": "Placement",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Jam",
        "Cup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_942_isaac_state_train",
      "description": "Real LeRobot demo for task 942: Put both the Jam and the Cup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 346,
        "cleanEpisodes": 51,
        "cleanFrames": 7203,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-942-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 141,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-942-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-942-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_942_isaac_state_train",
        "episodes": 346,
        "frames": 51404,
        "fps": 30,
        "durationSeconds": 1713.4666666666667
      }
    },
    {
      "id": "AXIS-943",
      "taskId": 943,
      "title": "Put the Potato in the Bowl",
      "slug": "put_the_potato_in_the_bowl",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Potato",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_943_isaac_state_train",
      "description": "Real LeRobot demo for task 943: Put the Potato in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1079,
        "cleanEpisodes": 75,
        "cleanFrames": 11845,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-943-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 158,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-943-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-943-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_943_isaac_state_train",
        "episodes": 1079,
        "frames": 127982,
        "fps": 30,
        "durationSeconds": 4266.066666666667
      }
    },
    {
      "id": "AXIS-944",
      "taskId": 944,
      "title": "Put the Green Pepper in the Bowl",
      "slug": "put_the_green_pepper_in_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Green Pepper",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_944_isaac_state_train",
      "description": "Real LeRobot demo for task 944: Put the Green Pepper in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 976,
        "cleanEpisodes": 90,
        "cleanFrames": 11925,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-944-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-944-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-944-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_944_isaac_state_train",
        "episodes": 976,
        "frames": 152155,
        "fps": 30,
        "durationSeconds": 5071.833333333333
      }
    },
    {
      "id": "AXIS-945",
      "taskId": 945,
      "title": "Put both the Potato and the Pepper in the Bowl",
      "slug": "put_both_the_potato_and_the_pepper_in_the_bowl",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Potato",
        "Pepper",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_945_isaac_state_train",
      "description": "Real LeRobot demo for task 945: Put both the Potato and the Pepper in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 335,
        "cleanEpisodes": 106,
        "cleanFrames": 14932,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-945-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 141,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-945-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-945-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_945_isaac_state_train",
        "episodes": 335,
        "frames": 48105,
        "fps": 30,
        "durationSeconds": 1603.5
      }
    },
    {
      "id": "AXIS-946",
      "taskId": 946,
      "title": "Put the Potato on the Cutting Board",
      "slug": "put_the_potato_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Potato",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_946_isaac_state_train",
      "description": "Real LeRobot demo for task 946: Put the Potato on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 917,
        "cleanEpisodes": 40,
        "cleanFrames": 7037,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-946-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 176,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-946-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-946-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_946_isaac_state_train",
        "episodes": 917,
        "frames": 144469,
        "fps": 30,
        "durationSeconds": 4815.633333333333
      }
    },
    {
      "id": "AXIS-947",
      "taskId": 947,
      "title": "Put the Green Pepper on the Cutting Board",
      "slug": "put_the_green_pepper_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Green Pepper",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_947_isaac_state_train",
      "description": "Real LeRobot demo for task 947: Put the Green Pepper on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1118,
        "cleanEpisodes": 129,
        "cleanFrames": 9309,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-947-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 72,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-947-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-947-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_947_isaac_state_train",
        "episodes": 1118,
        "frames": 119168,
        "fps": 30,
        "durationSeconds": 3972.266666666667
      }
    },
    {
      "id": "AXIS-948",
      "taskId": 948,
      "title": "Put both the Potato and the Pepper on the Cutting Board",
      "slug": "put_both_the_potato_and_the_pepper_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 4,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Potato",
        "Pepper",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_948_isaac_state_train",
      "description": "Real LeRobot demo for task 948: Put both the Potato and the Pepper on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 148,
        "cleanEpisodes": 10,
        "cleanFrames": 1582,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-948-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 158,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-948-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-948-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_948_isaac_state_train",
        "episodes": 148,
        "frames": 24544,
        "fps": 30,
        "durationSeconds": 818.1333333333333
      }
    },
    {
      "id": "AXIS-949",
      "taskId": 949,
      "title": "Put the Sweet Potato on the Tissue Box",
      "slug": "put_the_sweet_potato_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sweet Potato",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_949_isaac_state_train",
      "description": "Real LeRobot demo for task 949: Put the Sweet Potato on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 6,
        "cleanFrames": 1446,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-949-DEMO",
          "collector": "clean LeRobot export",
          "duration": "8s",
          "durationSeconds": 8,
          "frames": 241,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-949-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-949-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_949_isaac_state_train",
        "episodes": 10,
        "frames": 1720,
        "fps": 30,
        "durationSeconds": 57.333333333333336
      }
    },
    {
      "id": "AXIS-950",
      "taskId": 950,
      "title": "Put the Muffin on the Tissue Box",
      "slug": "put_the_muffin_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_950_isaac_state_train",
      "description": "Real LeRobot demo for task 950: Put the Muffin on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 163,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-950-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 163,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-950-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-950-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_950_isaac_state_train",
        "episodes": 10,
        "frames": 1794,
        "fps": 30,
        "durationSeconds": 59.8
      }
    },
    {
      "id": "AXIS-951",
      "taskId": 951,
      "title": "Put the Cup on the Tissue Box",
      "slug": "put_the_cup_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_951_isaac_state_train",
      "description": "Real LeRobot demo for task 951: Put the Cup on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1070,
        "cleanEpisodes": 312,
        "cleanFrames": 35073,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-951-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-951-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-951-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_951_isaac_state_train",
        "episodes": 1070,
        "frames": 121781,
        "fps": 30,
        "durationSeconds": 4059.366666666667
      }
    },
    {
      "id": "AXIS-953",
      "taskId": 953,
      "title": "Put the Muffin on the Left Side of the Cup",
      "slug": "put_the_muffin_on_the_left_side_of_the_cup",
      "category": "Placement",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Left Side of the Cup"
      ],
      "source": "data_lerobot/clean/task_953_isaac_state_train",
      "description": "Real LeRobot demo for task 953: Put the Muffin on the Left Side of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1192,
        "cleanEpisodes": 401,
        "cleanFrames": 40943,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-953-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 102,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-953-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-953-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_953_isaac_state_train",
        "episodes": 1192,
        "frames": 176014,
        "fps": 30,
        "durationSeconds": 5867.133333333333
      }
    },
    {
      "id": "AXIS-954",
      "taskId": 954,
      "title": "Put the Cup on the Right Side of the Sweet Potato",
      "slug": "put_the_cup_on_the_right_side_of_the_sweet_potato",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Right Side of the Sweet Potato"
      ],
      "source": "data_lerobot/clean/task_954_isaac_state_train",
      "description": "Real LeRobot demo for task 954: Put the Cup on the Right Side of the Sweet Potato. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1195,
        "cleanEpisodes": 308,
        "cleanFrames": 30404,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-954-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 99,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-954-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-954-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_954_isaac_state_train",
        "episodes": 1195,
        "frames": 118225,
        "fps": 30,
        "durationSeconds": 3940.8333333333335
      }
    },
    {
      "id": "AXIS-962",
      "taskId": 962,
      "title": "Put the Toy Car on the Cube Block",
      "slug": "put_the_toy_car_on_the_cube_block",
      "category": "Placement",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Cube Block"
      ],
      "source": "data_lerobot/clean/task_962_isaac_state_train",
      "description": "Real LeRobot demo for task 962: Put the Toy Car on the Cube Block. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 100,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-962-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 100,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-962-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-962-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_962_isaac_state_train",
        "episodes": 10,
        "frames": 1639,
        "fps": 30,
        "durationSeconds": 54.63333333333333
      }
    },
    {
      "id": "AXIS-963",
      "taskId": 963,
      "title": "Put the Toy Figurine on the Cube Block",
      "slug": "put_the_toy_figurine_on_the_cube_block",
      "category": "Placement",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Figurine",
        "Cube Block"
      ],
      "source": "data_lerobot/clean/task_963_isaac_state_train",
      "description": "Real LeRobot demo for task 963: Put the Toy Figurine on the Cube Block. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1189,
        "cleanEpisodes": 53,
        "cleanFrames": 7152,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-963-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 135,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-963-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-963-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_963_isaac_state_train",
        "episodes": 1189,
        "frames": 149607,
        "fps": 30,
        "durationSeconds": 4986.9
      }
    },
    {
      "id": "AXIS-964",
      "taskId": 964,
      "title": "Put the Toy Car on the Right Side of the Toy Figurine",
      "slug": "put_the_toy_car_on_the_right_side_of_the_toy_figurine",
      "category": "Placement",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Right Side of the Toy Figurine"
      ],
      "source": "data_lerobot/clean/task_964_isaac_state_train",
      "description": "Real LeRobot demo for task 964: Put the Toy Car on the Right Side of the Toy Figurine. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 947,
        "cleanEpisodes": 103,
        "cleanFrames": 13091,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-964-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-964-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-964-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_964_isaac_state_train",
        "episodes": 947,
        "frames": 128328,
        "fps": 30,
        "durationSeconds": 4277.6
      }
    },
    {
      "id": "AXIS-965",
      "taskId": 965,
      "title": "Put the Toy Car on the Left Side of the Cube Block",
      "slug": "put_the_toy_car_on_the_left_side_of_the_cube_block",
      "category": "Placement",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Left Side of the Cube Block"
      ],
      "source": "data_lerobot/clean/task_965_isaac_state_train",
      "description": "Real LeRobot demo for task 965: Put the Toy Car on the Left Side of the Cube Block. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 946,
        "cleanEpisodes": 182,
        "cleanFrames": 18892,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-965-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-965-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-965-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_965_isaac_state_train",
        "episodes": 946,
        "frames": 109571,
        "fps": 30,
        "durationSeconds": 3652.366666666667
      }
    },
    {
      "id": "AXIS-966",
      "taskId": 966,
      "title": "Put the Eyeglasses Case on the Tissue Box",
      "slug": "put_the_eyeglasses_case_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 4,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_966_isaac_state_train",
      "description": "Real LeRobot demo for task 966: Put the Eyeglasses Case on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1148,
        "cleanEpisodes": 216,
        "cleanFrames": 26335,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-966-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 122,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-966-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-966-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_966_isaac_state_train",
        "episodes": 1148,
        "frames": 132096,
        "fps": 30,
        "durationSeconds": 4403.2
      }
    },
    {
      "id": "AXIS-967",
      "taskId": 967,
      "title": "Put the Camera on the Tissue Box",
      "slug": "put_the_camera_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Camera",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_967_isaac_state_train",
      "description": "Real LeRobot demo for task 967: Put the Camera on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 208,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-967-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-967-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-967-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_967_isaac_state_train",
        "episodes": 10,
        "frames": 1919,
        "fps": 30,
        "durationSeconds": 63.96666666666667
      }
    },
    {
      "id": "AXIS-968",
      "taskId": 968,
      "title": "Put the Wallet on the Tissue Box",
      "slug": "put_the_wallet_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Wallet",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_968_isaac_state_train",
      "description": "Real LeRobot demo for task 968: Put the Wallet on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1114,
        "cleanEpisodes": 51,
        "cleanFrames": 9193,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-968-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 180,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-968-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-968-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_968_isaac_state_train",
        "episodes": 1114,
        "frames": 198846,
        "fps": 30,
        "durationSeconds": 6628.2
      }
    },
    {
      "id": "AXIS-970",
      "taskId": 970,
      "title": "Rotate the Eyeglasses Case",
      "slug": "rotate_the_eyeglasses_case",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case"
      ],
      "source": "data_lerobot/clean/task_970_isaac_state_train",
      "description": "Real LeRobot demo for task 970: Rotate the Eyeglasses Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 149,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-970-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 149,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-970-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-970-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_970_isaac_state_train",
        "episodes": 10,
        "frames": 1508,
        "fps": 30,
        "durationSeconds": 50.266666666666666
      }
    },
    {
      "id": "AXIS-973",
      "taskId": 973,
      "title": "Put the Chicken Leg into the Pan",
      "slug": "put_the_chicken_leg_into_the_pan",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chicken Leg",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_973_isaac_state_train",
      "description": "Real LeRobot demo for task 973: Put the Chicken Leg into the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1198,
        "cleanEpisodes": 332,
        "cleanFrames": 72473,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-973-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-973-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-973-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_973_isaac_state_train",
        "episodes": 1198,
        "frames": 197642,
        "fps": 30,
        "durationSeconds": 6588.066666666667
      }
    },
    {
      "id": "AXIS-974",
      "taskId": 974,
      "title": "Put the Salt Container into the Pan",
      "slug": "put_the_salt_container_into_the_pan",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Salt Container",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_974_isaac_state_train",
      "description": "Real LeRobot demo for task 974: Put the Salt Container into the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 960,
        "cleanEpisodes": 188,
        "cleanFrames": 27875,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-974-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 148,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-974-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-974-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_974_isaac_state_train",
        "episodes": 960,
        "frames": 142546,
        "fps": 30,
        "durationSeconds": 4751.533333333334
      }
    },
    {
      "id": "AXIS-975",
      "taskId": 975,
      "title": "Put the Tomato on the Left Side of the Chicken Leg",
      "slug": "put_the_tomato_on_the_left_side_of_the_chicken_leg",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tomato",
        "Left Side of the Chicken Leg"
      ],
      "source": "data_lerobot/clean/task_975_isaac_state_train",
      "description": "Real LeRobot demo for task 975: Put the Tomato on the Left Side of the Chicken Leg. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1190,
        "cleanEpisodes": 255,
        "cleanFrames": 30603,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-975-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 120,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-975-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-975-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_975_isaac_state_train",
        "episodes": 1190,
        "frames": 187321,
        "fps": 30,
        "durationSeconds": 6244.033333333334
      }
    },
    {
      "id": "AXIS-976",
      "taskId": 976,
      "title": "Rotate the Frying Pan",
      "slug": "rotate_the_frying_pan",
      "category": "Rotation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Frying Pan"
      ],
      "source": "data_lerobot/clean/task_976_isaac_state_train",
      "description": "Real LeRobot demo for task 976: Rotate the Frying Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 6,
        "cleanFrames": 1387,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-976-DEMO",
          "collector": "clean LeRobot export",
          "duration": "8s",
          "durationSeconds": 8,
          "frames": 231,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-976-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-976-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_976_isaac_state_train",
        "episodes": 10,
        "frames": 1737,
        "fps": 30,
        "durationSeconds": 57.9
      }
    },
    {
      "id": "AXIS-977",
      "taskId": 977,
      "title": "Rotate the Frying Pan 2",
      "slug": "rotate_the_frying_pan_2",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Frying Pan 2"
      ],
      "source": "data_lerobot/clean/task_977_isaac_state_train",
      "description": "Real LeRobot demo for task 977: Rotate the Frying Pan 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 5,
        "cleanFrames": 1134,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-977-DEMO",
          "collector": "clean LeRobot export",
          "duration": "8s",
          "durationSeconds": 8,
          "frames": 227,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-977-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-977-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_977_isaac_state_train",
        "episodes": 10,
        "frames": 1700,
        "fps": 30,
        "durationSeconds": 56.666666666666664
      }
    },
    {
      "id": "AXIS-978",
      "taskId": 978,
      "title": "Put the Ballet Flat into the Basket",
      "slug": "put_the_ballet_flat_into_the_basket",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ballet Flat",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_978_isaac_state_train",
      "description": "Real LeRobot demo for task 978: Put the Ballet Flat into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1199,
        "cleanEpisodes": 303,
        "cleanFrames": 33987,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-978-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-978-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-978-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_978_isaac_state_train",
        "episodes": 1199,
        "frames": 149469,
        "fps": 30,
        "durationSeconds": 4982.3
      }
    },
    {
      "id": "AXIS-979",
      "taskId": 979,
      "title": "Put the Sneaker into the Basket",
      "slug": "put_the_sneaker_into_the_basket",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sneaker",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_979_isaac_state_train",
      "description": "Real LeRobot demo for task 979: Put the Sneaker into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1190,
        "cleanEpisodes": 160,
        "cleanFrames": 26513,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-979-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 166,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-979-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-979-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_979_isaac_state_train",
        "episodes": 1190,
        "frames": 206352,
        "fps": 30,
        "durationSeconds": 6878.4
      }
    },
    {
      "id": "AXIS-980",
      "taskId": 980,
      "title": "Rotate the Ballet Flat",
      "slug": "rotate_the_ballet_flat",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ballet Flat"
      ],
      "source": "data_lerobot/clean/task_980_isaac_state_train",
      "description": "Real LeRobot demo for task 980: Rotate the Ballet Flat. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 911,
        "cleanEpisodes": 272,
        "cleanFrames": 31986,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-980-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-980-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-980-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_980_isaac_state_train",
        "episodes": 911,
        "frames": 105757,
        "fps": 30,
        "durationSeconds": 3525.233333333333
      }
    },
    {
      "id": "AXIS-981",
      "taskId": 981,
      "title": "Rotate the Sneaker",
      "slug": "rotate_the_sneaker",
      "category": "Rotation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sneaker"
      ],
      "source": "data_lerobot/clean/task_981_isaac_state_train",
      "description": "Real LeRobot demo for task 981: Rotate the Sneaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 1163,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-981-DEMO",
          "collector": "clean LeRobot export",
          "duration": "10s",
          "durationSeconds": 10,
          "frames": 291,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-981-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-981-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_981_isaac_state_train",
        "episodes": 10,
        "frames": 1729,
        "fps": 30,
        "durationSeconds": 57.63333333333333
      }
    },
    {
      "id": "AXIS-982",
      "taskId": 982,
      "title": "Put the Sneaker on the Left Side of the Handbag",
      "slug": "put_the_sneaker_on_the_left_side_of_the_handbag",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sneaker",
        "Left Side of the Handbag"
      ],
      "source": "data_lerobot/clean/task_982_isaac_state_train",
      "description": "Real LeRobot demo for task 982: Put the Sneaker on the Left Side of the Handbag. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 814,
        "cleanEpisodes": 125,
        "cleanFrames": 20602,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-982-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-982-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-982-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_982_isaac_state_train",
        "episodes": 814,
        "frames": 145515,
        "fps": 30,
        "durationSeconds": 4850.5
      }
    },
    {
      "id": "AXIS-983",
      "taskId": 983,
      "title": "Put the Ballet Flat on the Left Side of the Handbag",
      "slug": "put_the_ballet_flat_on_the_left_side_of_the_handbag",
      "category": "Placement",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ballet Flat",
        "Left Side of the Handbag"
      ],
      "source": "data_lerobot/clean/task_983_isaac_state_train",
      "description": "Real LeRobot demo for task 983: Put the Ballet Flat on the Left Side of the Handbag. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 414,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-983-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 207,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-983-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-983-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_983_isaac_state_train",
        "episodes": 10,
        "frames": 1564,
        "fps": 30,
        "durationSeconds": 52.13333333333333
      }
    },
    {
      "id": "AXIS-984",
      "taskId": 984,
      "title": "Put the Screwdriver on the Toolbox",
      "slug": "put_the_screwdriver_on_the_toolbox",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Screwdriver",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_984_isaac_state_train",
      "description": "Real LeRobot demo for task 984: Put the Screwdriver on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 99,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-984-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 99,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-984-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-984-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_984_isaac_state_train",
        "episodes": 10,
        "frames": 1673,
        "fps": 30,
        "durationSeconds": 55.766666666666666
      }
    },
    {
      "id": "AXIS-985",
      "taskId": 985,
      "title": "Put the Hammer on the Toolbox",
      "slug": "put_the_hammer_on_the_toolbox",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_985_isaac_state_train",
      "description": "Real LeRobot demo for task 985: Put the Hammer on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 527,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-985-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-985-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-985-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_985_isaac_state_train",
        "episodes": 10,
        "frames": 1772,
        "fps": 30,
        "durationSeconds": 59.06666666666667
      }
    },
    {
      "id": "AXIS-986",
      "taskId": 986,
      "title": "Put the Cup on the Toolbox",
      "slug": "put_the_cup_on_the_toolbox",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_986_isaac_state_train",
      "description": "Real LeRobot demo for task 986: Put the Cup on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 361,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-986-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 90,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-986-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-986-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_986_isaac_state_train",
        "episodes": 10,
        "frames": 1382,
        "fps": 30,
        "durationSeconds": 46.06666666666667
      }
    },
    {
      "id": "AXIS-988",
      "taskId": 988,
      "title": "Rotate the Screwdriver",
      "slug": "rotate_the_screwdriver",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Screwdriver"
      ],
      "source": "data_lerobot/clean/task_988_isaac_state_train",
      "description": "Real LeRobot demo for task 988: Rotate the Screwdriver. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1213,
        "cleanEpisodes": 398,
        "cleanFrames": 45947,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-988-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 115,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-988-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-988-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_988_isaac_state_train",
        "episodes": 1213,
        "frames": 123940,
        "fps": 30,
        "durationSeconds": 4131.333333333333
      }
    },
    {
      "id": "AXIS-989",
      "taskId": 989,
      "title": "Rotate the Hammer",
      "slug": "rotate_the_hammer",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer"
      ],
      "source": "data_lerobot/clean/task_989_isaac_state_train",
      "description": "Real LeRobot demo for task 989: Rotate the Hammer. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 211,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-989-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-989-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-989-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_989_isaac_state_train",
        "episodes": 10,
        "frames": 1660,
        "fps": 30,
        "durationSeconds": 55.333333333333336
      }
    },
    {
      "id": "AXIS-990",
      "taskId": 990,
      "title": "Put the Trowel into the Pot",
      "slug": "put_the_trowel_into_the_pot",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Trowel",
        "Pot"
      ],
      "source": "data_lerobot/clean/task_990_isaac_state_train",
      "description": "Real LeRobot demo for task 990: Put the Trowel into the Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 942,
        "cleanEpisodes": 316,
        "cleanFrames": 29880,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-990-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 95,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-990-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-990-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_990_isaac_state_train",
        "episodes": 942,
        "frames": 100163,
        "fps": 30,
        "durationSeconds": 3338.766666666667
      }
    },
    {
      "id": "AXIS-992",
      "taskId": 992,
      "title": "Put the Trowel beside the Rose",
      "slug": "put_the_trowel_beside_the_rose",
      "category": "Placement / relation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Trowel",
        "Rose"
      ],
      "source": "data_lerobot/clean/task_992_isaac_state_train",
      "description": "Real LeRobot demo for task 992: Put the Trowel beside the Rose. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 106,
        "cleanEpisodes": 36,
        "cleanFrames": 1878,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-992-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-992-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-992-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_992_isaac_state_train",
        "episodes": 106,
        "frames": 5770,
        "fps": 30,
        "durationSeconds": 192.33333333333334
      }
    },
    {
      "id": "AXIS-993",
      "taskId": 993,
      "title": "Put the Trowel beside the Pot",
      "slug": "put_the_trowel_beside_the_pot",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Trowel",
        "Pot"
      ],
      "source": "data_lerobot/clean/task_993_isaac_state_train",
      "description": "Real LeRobot demo for task 993: Put the Trowel beside the Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 799,
        "cleanEpisodes": 49,
        "cleanFrames": 4827,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-993-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 99,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-993-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-993-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_993_isaac_state_train",
        "episodes": 799,
        "frames": 90097,
        "fps": 30,
        "durationSeconds": 3003.233333333333
      }
    },
    {
      "id": "AXIS-994",
      "taskId": 994,
      "title": "Rotate the Rose",
      "slug": "rotate_the_rose",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rose"
      ],
      "source": "data_lerobot/clean/task_994_isaac_state_train",
      "description": "Real LeRobot demo for task 994: Rotate the Rose. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1203,
        "cleanEpisodes": 277,
        "cleanFrames": 34365,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-994-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 124,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-994-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-994-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_994_isaac_state_train",
        "episodes": 1203,
        "frames": 134623,
        "fps": 30,
        "durationSeconds": 4487.433333333333
      }
    },
    {
      "id": "AXIS-995",
      "taskId": 995,
      "title": "Put the Rose beside to the Pot",
      "slug": "put_the_rose_beside_to_the_pot",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rose",
        "to  Pot"
      ],
      "source": "data_lerobot/clean/task_995_isaac_state_train",
      "description": "Real LeRobot demo for task 995: Put the Rose beside to the Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 308,
        "cleanEpisodes": 32,
        "cleanFrames": 2309,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-995-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 72,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-995-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-995-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_995_isaac_state_train",
        "episodes": 308,
        "frames": 21047,
        "fps": 30,
        "durationSeconds": 701.5666666666667
      }
    },
    {
      "id": "AXIS-996",
      "taskId": 996,
      "title": "Put the Test Tube into the Beaker",
      "slug": "put_the_test_tube_into_the_beaker",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Test Tube",
        "Beaker"
      ],
      "source": "data_lerobot/clean/task_996_isaac_state_train",
      "description": "Real LeRobot demo for task 996: Put the Test Tube into the Beaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1203,
        "cleanEpisodes": 380,
        "cleanFrames": 59923,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-996-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 158,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-996-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-996-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_996_isaac_state_train",
        "episodes": 1203,
        "frames": 217804,
        "fps": 30,
        "durationSeconds": 7260.133333333333
      }
    },
    {
      "id": "AXIS-997",
      "taskId": 997,
      "title": "Put the Pipette into the Beaker",
      "slug": "put_the_pipette_into_the_beaker",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pipette",
        "Beaker"
      ],
      "source": "data_lerobot/clean/task_997_isaac_state_train",
      "description": "Real LeRobot demo for task 997: Put the Pipette into the Beaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1206,
        "cleanEpisodes": 297,
        "cleanFrames": 57908,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-997-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 195,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-997-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-997-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_997_isaac_state_train",
        "episodes": 1206,
        "frames": 216421,
        "fps": 30,
        "durationSeconds": 7214.033333333334
      }
    },
    {
      "id": "AXIS-998",
      "taskId": 998,
      "title": "Put the Test Tube beside the Pipette",
      "slug": "put_the_test_tube_beside_the_pipette",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Test Tube",
        "Pipette"
      ],
      "source": "data_lerobot/clean/task_998_isaac_state_train",
      "description": "Real LeRobot demo for task 998: Put the Test Tube beside the Pipette. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 283,
        "cleanFrames": 26052,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-998-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-998-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-998-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_998_isaac_state_train",
        "episodes": 1205,
        "frames": 116191,
        "fps": 30,
        "durationSeconds": 3873.0333333333333
      }
    },
    {
      "id": "AXIS-999",
      "taskId": 999,
      "title": "Put the Pipette beside the Beaker",
      "slug": "put_the_pipette_beside_the_beaker",
      "category": "Placement / relation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pipette",
        "Beaker"
      ],
      "source": "data_lerobot/clean/task_999_isaac_state_train",
      "description": "Real LeRobot demo for task 999: Put the Pipette beside the Beaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1199,
        "cleanEpisodes": 234,
        "cleanFrames": 21619,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-999-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-999-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-999-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_999_isaac_state_train",
        "episodes": 1199,
        "frames": 150393,
        "fps": 30,
        "durationSeconds": 5013.1
      }
    },
    {
      "id": "AXIS-1000",
      "taskId": 1000,
      "title": "Rotate the Test Tube",
      "slug": "rotate_the_test_tube",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Test Tube"
      ],
      "source": "data_lerobot/clean/task_1000_isaac_state_train",
      "description": "Real LeRobot demo for task 1000: Rotate the Test Tube. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 3,
        "cleanFrames": 273,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1000-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 91,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1000-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1000-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1000_isaac_state_train",
        "episodes": 10,
        "frames": 1357,
        "fps": 30,
        "durationSeconds": 45.233333333333334
      }
    },
    {
      "id": "AXIS-1001",
      "taskId": 1001,
      "title": "Rotate the Pipette",
      "slug": "rotate_the_pipette",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pipette"
      ],
      "source": "data_lerobot/clean/task_1001_isaac_state_train",
      "description": "Real LeRobot demo for task 1001: Rotate the Pipette. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 5,
        "cleanFrames": 447,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1001-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1001-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1001-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1001_isaac_state_train",
        "episodes": 10,
        "frames": 1717,
        "fps": 30,
        "durationSeconds": 57.233333333333334
      }
    },
    {
      "id": "AXIS-1002",
      "taskId": 1002,
      "title": "Put the Microphone on the Speaker",
      "slug": "put_the_microphone_on_the_speaker",
      "category": "Placement",
      "difficulty": 5,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Microphone",
        "Speaker"
      ],
      "source": "data_lerobot/clean/task_1002_isaac_state_train",
      "description": "Real LeRobot demo for task 1002: Put the Microphone on the Speaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1052,
        "cleanEpisodes": 171,
        "cleanFrames": 22310,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1002-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 130,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1002-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1002-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1002_isaac_state_train",
        "episodes": 1052,
        "frames": 133475,
        "fps": 30,
        "durationSeconds": 4449.166666666667
      }
    },
    {
      "id": "AXIS-1003",
      "taskId": 1003,
      "title": "Put the Headphone on the Speaker",
      "slug": "put_the_headphone_on_the_speaker",
      "category": "Placement",
      "difficulty": 1,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Headphone",
        "Speaker"
      ],
      "source": "data_lerobot/clean/task_1003_isaac_state_train",
      "description": "Real LeRobot demo for task 1003: Put the Headphone on the Speaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 100,
        "cleanFrames": 8759,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1003-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 88,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1003-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1003-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1003_isaac_state_train",
        "episodes": 1204,
        "frames": 139463,
        "fps": 30,
        "durationSeconds": 4648.766666666666
      }
    },
    {
      "id": "AXIS-1005",
      "taskId": 1005,
      "title": "Put the Headphone on the Cassette",
      "slug": "put_the_headphone_on_the_cassette",
      "category": "Placement",
      "difficulty": 2,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Headphone",
        "Cassette"
      ],
      "source": "data_lerobot/clean/task_1005_isaac_state_train",
      "description": "Real LeRobot demo for task 1005: Put the Headphone on the Cassette. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1206,
        "cleanEpisodes": 238,
        "cleanFrames": 17724,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1005-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 74,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1005-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1005-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1005_isaac_state_train",
        "episodes": 1206,
        "frames": 106114,
        "fps": 30,
        "durationSeconds": 3537.133333333333
      }
    },
    {
      "id": "AXIS-1007",
      "taskId": 1007,
      "title": "Rotate the Microphone",
      "slug": "rotate_the_microphone",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Microphone"
      ],
      "source": "data_lerobot/clean/task_1007_isaac_state_train",
      "description": "Real LeRobot demo for task 1007: Rotate the Microphone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 258,
        "cleanFrames": 29044,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1007-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 113,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1007-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1007-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1007_isaac_state_train",
        "episodes": 1204,
        "frames": 180629,
        "fps": 30,
        "durationSeconds": 6020.966666666666
      }
    },
    {
      "id": "AXIS-1012",
      "taskId": 1012,
      "title": "Put the Bamboo Cylinder into the Basket",
      "slug": "put_the_bamboo_cylinder_into_the_basket",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Bamboo Cylinder",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1012_isaac_state_train",
      "description": "Real LeRobot demo for task 1012: Put the Bamboo Cylinder into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1194,
        "cleanEpisodes": 1194,
        "cleanFrames": 205352,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1012-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 172,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1012-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1012-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1012_isaac_state_train",
        "episodes": 1194,
        "frames": 205352,
        "fps": 30,
        "durationSeconds": 6845.066666666667
      }
    },
    {
      "id": "AXIS-1013",
      "taskId": 1013,
      "title": "Put the Computer Mouse on the Notebook",
      "slug": "put_the_computer_mouse_on_the_notebook",
      "category": "Placement",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1013_isaac_state_train",
      "description": "Real LeRobot demo for task 1013: Put the Computer Mouse on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1179,
        "cleanEpisodes": 79,
        "cleanFrames": 13046,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1013-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1013-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1013-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1013_isaac_state_train",
        "episodes": 1179,
        "frames": 166938,
        "fps": 30,
        "durationSeconds": 5564.6
      }
    },
    {
      "id": "AXIS-1015",
      "taskId": 1015,
      "title": "Put the Computer Mouse on the Keyboard",
      "slug": "put_the_computer_mouse_on_the_keyboard",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Keyboard"
      ],
      "source": "data_lerobot/clean/task_1015_isaac_state_train",
      "description": "Real LeRobot demo for task 1015: Put the Computer Mouse on the Keyboard. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 890,
        "cleanEpisodes": 164,
        "cleanFrames": 15566,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1015-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 95,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1015-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1015-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1015_isaac_state_train",
        "episodes": 890,
        "frames": 89106,
        "fps": 30,
        "durationSeconds": 2970.2
      }
    },
    {
      "id": "AXIS-1017",
      "taskId": 1017,
      "title": "Rotate the Computer Mouse",
      "slug": "rotate_the_computer_mouse",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse"
      ],
      "source": "data_lerobot/clean/task_1017_isaac_state_train",
      "description": "Real LeRobot demo for task 1017: Rotate the Computer Mouse. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 316,
        "cleanFrames": 37513,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1017-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 119,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1017-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1017-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1017_isaac_state_train",
        "episodes": 1205,
        "frames": 137006,
        "fps": 30,
        "durationSeconds": 4566.866666666667
      }
    },
    {
      "id": "AXIS-1018",
      "taskId": 1018,
      "title": "Rotate the Pen",
      "slug": "rotate_the_pen",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen"
      ],
      "source": "data_lerobot/clean/task_1018_isaac_state_train",
      "description": "Real LeRobot demo for task 1018: Rotate the Pen. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1131,
        "cleanEpisodes": 371,
        "cleanFrames": 70480,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1018-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 190,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1018-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1018-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1018_isaac_state_train",
        "episodes": 1131,
        "frames": 177775,
        "fps": 30,
        "durationSeconds": 5925.833333333333
      }
    },
    {
      "id": "AXIS-1019",
      "taskId": 1019,
      "title": "Put the Soap on the Tissue Box",
      "slug": "put_the_soap_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_1019_isaac_state_train",
      "description": "Real LeRobot demo for task 1019: Put the Soap on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 243,
        "cleanFrames": 21638,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1019-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1019-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1019-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1019_isaac_state_train",
        "episodes": 1204,
        "frames": 126131,
        "fps": 30,
        "durationSeconds": 4204.366666666667
      }
    },
    {
      "id": "AXIS-1020",
      "taskId": 1020,
      "title": "Put the Contact Lens Case on the Tissue Box",
      "slug": "put_the_contact_lens_case_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Contact Lens Case",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_1020_isaac_state_train",
      "description": "Real LeRobot demo for task 1020: Put the Contact Lens Case on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1213,
        "cleanEpisodes": 230,
        "cleanFrames": 31549,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1020-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 137,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1020-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1020-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1020_isaac_state_train",
        "episodes": 1213,
        "frames": 148063,
        "fps": 30,
        "durationSeconds": 4935.433333333333
      }
    },
    {
      "id": "AXIS-1021",
      "taskId": 1021,
      "title": "Put the Comb on the Tissue Box",
      "slug": "put_the_comb_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_1021_isaac_state_train",
      "description": "Real LeRobot demo for task 1021: Put the Comb on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1145,
        "cleanEpisodes": 35,
        "cleanFrames": 4648,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1021-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 133,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1021-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1021-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1021_isaac_state_train",
        "episodes": 1145,
        "frames": 166224,
        "fps": 30,
        "durationSeconds": 5540.8
      }
    },
    {
      "id": "AXIS-1022",
      "taskId": 1022,
      "title": "Put the Soap beside the Comb",
      "slug": "put_the_soap_beside_the_comb",
      "category": "Placement / relation",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap",
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1022_isaac_state_train",
      "description": "Real LeRobot demo for task 1022: Put the Soap beside the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1211,
        "cleanEpisodes": 112,
        "cleanFrames": 8323,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1022-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 74,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1022-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1022-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1022_isaac_state_train",
        "episodes": 1211,
        "frames": 134589,
        "fps": 30,
        "durationSeconds": 4486.3
      }
    },
    {
      "id": "AXIS-1023",
      "taskId": 1023,
      "title": "Rotate the Soap",
      "slug": "rotate_the_soap",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap"
      ],
      "source": "data_lerobot/clean/task_1023_isaac_state_train",
      "description": "Real LeRobot demo for task 1023: Rotate the Soap. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 1158,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1023-DEMO",
          "collector": "clean LeRobot export",
          "duration": "10s",
          "durationSeconds": 10,
          "frames": 290,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1023-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1023-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1023_isaac_state_train",
        "episodes": 10,
        "frames": 1652,
        "fps": 30,
        "durationSeconds": 55.06666666666667
      }
    },
    {
      "id": "AXIS-1024",
      "taskId": 1024,
      "title": "Rotate the Comb",
      "slug": "rotate_the_comb",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1024_isaac_state_train",
      "description": "Real LeRobot demo for task 1024: Rotate the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1192,
        "cleanEpisodes": 463,
        "cleanFrames": 52125,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1024-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 113,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1024-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1024-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1024_isaac_state_train",
        "episodes": 1192,
        "frames": 141560,
        "fps": 30,
        "durationSeconds": 4718.666666666667
      }
    },
    {
      "id": "AXIS-1025",
      "taskId": 1025,
      "title": "Put the Pen on the Notebook",
      "slug": "put_the_pen_on_the_notebook",
      "category": "Placement",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1025_isaac_state_train",
      "description": "Real LeRobot demo for task 1025: Put the Pen on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1363,
        "cleanEpisodes": 366,
        "cleanFrames": 53992,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1025-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 148,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1025-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1025-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1025_isaac_state_train",
        "episodes": 1363,
        "frames": 151136,
        "fps": 30,
        "durationSeconds": 5037.866666666667
      }
    },
    {
      "id": "AXIS-1026",
      "taskId": 1026,
      "title": "Put the Dice on the Notebook",
      "slug": "put_the_dice_on_the_notebook",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dice",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1026_isaac_state_train",
      "description": "Real LeRobot demo for task 1026: Put the Dice on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1184,
        "cleanEpisodes": 151,
        "cleanFrames": 17285,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1026-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 114,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1026-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1026-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1026_isaac_state_train",
        "episodes": 1184,
        "frames": 128282,
        "fps": 30,
        "durationSeconds": 4276.066666666667
      }
    },
    {
      "id": "AXIS-1027",
      "taskId": 1027,
      "title": "Put the Cup on the Notebook",
      "slug": "put_the_cup_on_the_notebook",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1027_isaac_state_train",
      "description": "Real LeRobot demo for task 1027: Put the Cup on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1186,
        "cleanEpisodes": 147,
        "cleanFrames": 16807,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1027-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 114,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1027-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1027-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1027_isaac_state_train",
        "episodes": 1186,
        "frames": 111501,
        "fps": 30,
        "durationSeconds": 3716.7
      }
    },
    {
      "id": "AXIS-1028",
      "taskId": 1028,
      "title": "Insert the Pen into the Cup",
      "slug": "insert_the_pen_into_the_cup",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen",
        "Cup"
      ],
      "source": "data_lerobot/clean/task_1028_isaac_state_train",
      "description": "Real LeRobot demo for task 1028: Insert the Pen into the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 707,
        "cleanEpisodes": 118,
        "cleanFrames": 18316,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1028-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 155,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1028-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1028-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1028_isaac_state_train",
        "episodes": 707,
        "frames": 97816,
        "fps": 30,
        "durationSeconds": 3260.5333333333333
      }
    },
    {
      "id": "AXIS-1029",
      "taskId": 1029,
      "title": "Put the Dice into the Cup",
      "slug": "put_the_dice_into_the_cup",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dice",
        "Cup"
      ],
      "source": "data_lerobot/clean/task_1029_isaac_state_train",
      "description": "Real LeRobot demo for task 1029: Put the Dice into the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 850,
        "cleanEpisodes": 173,
        "cleanFrames": 19395,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1029-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1029-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1029-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1029_isaac_state_train",
        "episodes": 850,
        "frames": 92337,
        "fps": 30,
        "durationSeconds": 3077.9
      }
    },
    {
      "id": "AXIS-1030",
      "taskId": 1030,
      "title": "Rotate the Pen",
      "slug": "rotate_the_pen",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen"
      ],
      "source": "data_lerobot/clean/task_1030_isaac_state_train",
      "description": "Real LeRobot demo for task 1030: Rotate the Pen. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 787,
        "cleanEpisodes": 305,
        "cleanFrames": 24071,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1030-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 79,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1030-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1030-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1030_isaac_state_train",
        "episodes": 787,
        "frames": 65028,
        "fps": 30,
        "durationSeconds": 2167.6
      }
    },
    {
      "id": "AXIS-1032",
      "taskId": 1032,
      "title": "Put the Pen on the Book",
      "slug": "put_the_pen_on_the_book",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen",
        "Book"
      ],
      "source": "data_lerobot/clean/task_1032_isaac_state_train",
      "description": "Real LeRobot demo for task 1032: Put the Pen on the Book. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 744,
        "cleanEpisodes": 98,
        "cleanFrames": 11606,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1032-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1032-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1032-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1032_isaac_state_train",
        "episodes": 744,
        "frames": 69996,
        "fps": 30,
        "durationSeconds": 2333.2
      }
    },
    {
      "id": "AXIS-1033",
      "taskId": 1033,
      "title": "Put the Glasses Case on the Book",
      "slug": "put_the_glasses_case_on_the_book",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Glasses Case",
        "Book"
      ],
      "source": "data_lerobot/clean/task_1033_isaac_state_train",
      "description": "Real LeRobot demo for task 1033: Put the Glasses Case on the Book. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 653,
        "cleanEpisodes": 203,
        "cleanFrames": 16652,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1033-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 82,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1033-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1033-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1033_isaac_state_train",
        "episodes": 653,
        "frames": 58881,
        "fps": 30,
        "durationSeconds": 1962.7
      }
    },
    {
      "id": "AXIS-1034",
      "taskId": 1034,
      "title": "Put the Cup on the Book",
      "slug": "put_the_cup_on_the_book",
      "category": "Placement",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Book"
      ],
      "source": "data_lerobot/clean/task_1034_isaac_state_train",
      "description": "Real LeRobot demo for task 1034: Put the Cup on the Book. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 864,
        "cleanEpisodes": 60,
        "cleanFrames": 4436,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1034-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 74,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1034-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1034-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1034_isaac_state_train",
        "episodes": 864,
        "frames": 57741,
        "fps": 30,
        "durationSeconds": 1924.7
      }
    },
    {
      "id": "AXIS-1036",
      "taskId": 1036,
      "title": "Rotate the Pen",
      "slug": "rotate_the_pen",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen"
      ],
      "source": "data_lerobot/clean/task_1036_isaac_state_train",
      "description": "Real LeRobot demo for task 1036: Rotate the Pen. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 490,
        "cleanEpisodes": 218,
        "cleanFrames": 17807,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1036-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 82,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1036-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1036-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1036_isaac_state_train",
        "episodes": 490,
        "frames": 42336,
        "fps": 30,
        "durationSeconds": 1411.2
      }
    },
    {
      "id": "AXIS-1037",
      "taskId": 1037,
      "title": "Rotate the Glasses Case",
      "slug": "rotate_the_glasses_case",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Glasses Case"
      ],
      "source": "data_lerobot/clean/task_1037_isaac_state_train",
      "description": "Real LeRobot demo for task 1037: Rotate the Glasses Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 388,
        "cleanEpisodes": 185,
        "cleanFrames": 11366,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1037-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 61,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1037-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1037-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1037_isaac_state_train",
        "episodes": 388,
        "frames": 28360,
        "fps": 30,
        "durationSeconds": 945.3333333333334
      }
    },
    {
      "id": "AXIS-1039",
      "taskId": 1039,
      "title": "Put the Muffin on the Plate",
      "slug": "put_the_muffin_on_the_plate",
      "category": "Placement",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_1039_isaac_state_train",
      "description": "Real LeRobot demo for task 1039: Put the Muffin on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 298,
        "cleanEpisodes": 10,
        "cleanFrames": 546,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1039-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 55,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1039-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1039-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1039_isaac_state_train",
        "episodes": 298,
        "frames": 18920,
        "fps": 30,
        "durationSeconds": 630.6666666666666
      }
    },
    {
      "id": "AXIS-1040",
      "taskId": 1040,
      "title": "Put the Teacup on the Plate",
      "slug": "put_the_teacup_on_the_plate",
      "category": "Placement",
      "difficulty": 2,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Teacup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_1040_isaac_state_train",
      "description": "Real LeRobot demo for task 1040: Put the Teacup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 377,
        "cleanEpisodes": 16,
        "cleanFrames": 941,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1040-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 59,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1040-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1040-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1040_isaac_state_train",
        "episodes": 377,
        "frames": 21202,
        "fps": 30,
        "durationSeconds": 706.7333333333333
      }
    },
    {
      "id": "AXIS-1042",
      "taskId": 1042,
      "title": "Put the Muffin beside the Teacup",
      "slug": "put_the_muffin_beside_the_teacup",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Teacup"
      ],
      "source": "data_lerobot/clean/task_1042_isaac_state_train",
      "description": "Real LeRobot demo for task 1042: Put the Muffin beside the Teacup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 249,
        "cleanEpisodes": 15,
        "cleanFrames": 684,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1042-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1042-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1042-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1042_isaac_state_train",
        "episodes": 249,
        "frames": 12280,
        "fps": 30,
        "durationSeconds": 409.3333333333333
      }
    },
    {
      "id": "AXIS-1043",
      "taskId": 1043,
      "title": "Rotate the Teacup",
      "slug": "rotate_the_teacup",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Teacup"
      ],
      "source": "data_lerobot/clean/task_1043_isaac_state_train",
      "description": "Real LeRobot demo for task 1043: Rotate the Teacup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 44,
        "cleanEpisodes": 17,
        "cleanFrames": 821,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1043-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 48,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1043-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1043-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1043_isaac_state_train",
        "episodes": 44,
        "frames": 2158,
        "fps": 30,
        "durationSeconds": 71.93333333333334
      }
    },
    {
      "id": "AXIS-1044",
      "taskId": 1044,
      "title": "Put the Cube Block into the Basket",
      "slug": "put_the_cube_block_into_the_basket",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cube Block",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1044_isaac_state_train",
      "description": "Real LeRobot demo for task 1044: Put the Cube Block into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 52,
        "cleanEpisodes": 13,
        "cleanFrames": 578,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1044-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1044-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1044-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1044_isaac_state_train",
        "episodes": 52,
        "frames": 2262,
        "fps": 30,
        "durationSeconds": 75.4
      }
    },
    {
      "id": "AXIS-1045",
      "taskId": 1045,
      "title": "Put the Toy Figurine into the Basket",
      "slug": "put_the_toy_figurine_into_the_basket",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Figurine",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1045_isaac_state_train",
      "description": "Real LeRobot demo for task 1045: Put the Toy Figurine into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 45,
        "cleanEpisodes": 14,
        "cleanFrames": 648,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1045-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1045-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1045-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1045_isaac_state_train",
        "episodes": 45,
        "frames": 2095,
        "fps": 30,
        "durationSeconds": 69.83333333333333
      }
    },
    {
      "id": "AXIS-1046",
      "taskId": 1046,
      "title": "Put the Toy Car into the Basket",
      "slug": "put_the_toy_car_into_the_basket",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1046_isaac_state_train",
      "description": "Real LeRobot demo for task 1046: Put the Toy Car into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 44,
        "cleanEpisodes": 15,
        "cleanFrames": 690,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1046-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1046-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1046-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1046_isaac_state_train",
        "episodes": 44,
        "frames": 1991,
        "fps": 30,
        "durationSeconds": 66.36666666666666
      }
    },
    {
      "id": "AXIS-1047",
      "taskId": 1047,
      "title": "Put the Cube Block beside the Toy Car",
      "slug": "put_the_cube_block_beside_the_toy_car",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cube Block",
        "Toy Car"
      ],
      "source": "data_lerobot/clean/task_1047_isaac_state_train",
      "description": "Real LeRobot demo for task 1047: Put the Cube Block beside the Toy Car. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 47,
        "cleanEpisodes": 18,
        "cleanFrames": 775,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1047-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 43,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1047-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1047-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1047_isaac_state_train",
        "episodes": 47,
        "frames": 2034,
        "fps": 30,
        "durationSeconds": 67.8
      }
    },
    {
      "id": "AXIS-1048",
      "taskId": 1048,
      "title": "Put the Cube Block beside the Toy Figurine",
      "slug": "put_the_cube_block_beside_the_toy_figurine",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cube Block",
        "Toy Figurine"
      ],
      "source": "data_lerobot/clean/task_1048_isaac_state_train",
      "description": "Real LeRobot demo for task 1048: Put the Cube Block beside the Toy Figurine. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 42,
        "cleanEpisodes": 8,
        "cleanFrames": 378,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1048-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 47,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1048-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1048-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1048_isaac_state_train",
        "episodes": 42,
        "frames": 1880,
        "fps": 30,
        "durationSeconds": 62.666666666666664
      }
    },
    {
      "id": "AXIS-1049",
      "taskId": 1049,
      "title": "Rotate the Toy Car",
      "slug": "rotate_the_toy_car",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car"
      ],
      "source": "data_lerobot/clean/task_1049_isaac_state_train",
      "description": "Real LeRobot demo for task 1049: Rotate the Toy Car. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 46,
        "cleanEpisodes": 25,
        "cleanFrames": 1099,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1049-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1049-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1049-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1049_isaac_state_train",
        "episodes": 46,
        "frames": 1989,
        "fps": 30,
        "durationSeconds": 66.3
      }
    },
    {
      "id": "AXIS-1050",
      "taskId": 1050,
      "title": "Put the Dice into the Bowl",
      "slug": "put_the_dice_into_the_bowl",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dice",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1050_isaac_state_train",
      "description": "Real LeRobot demo for task 1050: Put the Dice into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 33,
        "cleanEpisodes": 4,
        "cleanFrames": 206,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1050-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1050-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1050-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1050_isaac_state_train",
        "episodes": 33,
        "frames": 1728,
        "fps": 30,
        "durationSeconds": 57.6
      }
    },
    {
      "id": "AXIS-1051",
      "taskId": 1051,
      "title": "Put the Plum into the Bowl",
      "slug": "put_the_plum_into_the_bowl",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Plum",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1051_isaac_state_train",
      "description": "Real LeRobot demo for task 1051: Put the Plum into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 33,
        "cleanEpisodes": 1,
        "cleanFrames": 51,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1051-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 51,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1051-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1051-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1051_isaac_state_train",
        "episodes": 33,
        "frames": 1685,
        "fps": 30,
        "durationSeconds": 56.166666666666664
      }
    },
    {
      "id": "AXIS-1053",
      "taskId": 1053,
      "title": "Put the Plum on the Tray",
      "slug": "put_the_plum_on_the_tray",
      "category": "Placement",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Plum",
        "Tray"
      ],
      "source": "data_lerobot/clean/task_1053_isaac_state_train",
      "description": "Real LeRobot demo for task 1053: Put the Plum on the Tray. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 31,
        "cleanEpisodes": 1,
        "cleanFrames": 52,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1053-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1053-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1053-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1053_isaac_state_train",
        "episodes": 31,
        "frames": 1575,
        "fps": 30,
        "durationSeconds": 52.5
      }
    },
    {
      "id": "AXIS-1055",
      "taskId": 1055,
      "title": "Put the Plum beside the Dice",
      "slug": "put_the_plum_beside_the_dice",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Plum",
        "Dice"
      ],
      "source": "data_lerobot/clean/task_1055_isaac_state_train",
      "description": "Real LeRobot demo for task 1055: Put the Plum beside the Dice. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 29,
        "cleanEpisodes": 2,
        "cleanFrames": 116,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1055-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 58,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1055-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1055-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1055_isaac_state_train",
        "episodes": 29,
        "frames": 1601,
        "fps": 30,
        "durationSeconds": 53.36666666666667
      }
    },
    {
      "id": "AXIS-1058",
      "taskId": 1058,
      "title": "Put the Cup on the Notebook",
      "slug": "put_the_cup_on_the_notebook",
      "category": "Placement",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/local/task_1058_isaac_state_train",
      "description": "Real LeRobot demo for task 1058: Put the Cup on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 274,
        "cleanFrames": 24308,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1058-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1058-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1058-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1058_isaac_state_train",
        "episodes": 1205,
        "frames": 115753,
        "fps": 30,
        "durationSeconds": 3858.4333333333334
      }
    },
    {
      "id": "AXIS-1059",
      "taskId": 1059,
      "title": "Put the Cup beside the Notebook",
      "slug": "put_the_cup_beside_the_notebook",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1059_isaac_state_train",
      "description": "Real LeRobot demo for task 1059: Put the Cup beside the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 24,
        "cleanEpisodes": 6,
        "cleanFrames": 216,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1059-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 36,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1059-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1059-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1059_isaac_state_train",
        "episodes": 24,
        "frames": 849,
        "fps": 30,
        "durationSeconds": 28.3
      }
    },
    {
      "id": "AXIS-1060",
      "taskId": 1060,
      "title": "Rotate the Kettle",
      "slug": "rotate_the_kettle",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Kettle"
      ],
      "source": "data_lerobot/clean/task_1060_isaac_state_train",
      "description": "Real LeRobot demo for task 1060: Rotate the Kettle. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 21,
        "cleanEpisodes": 2,
        "cleanFrames": 82,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1060-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 41,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1060-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1060-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1060_isaac_state_train",
        "episodes": 21,
        "frames": 778,
        "fps": 30,
        "durationSeconds": 25.933333333333334
      }
    },
    {
      "id": "AXIS-1061",
      "taskId": 1061,
      "title": "Rotate the Grinder",
      "slug": "rotate_the_grinder",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Grinder"
      ],
      "source": "data_lerobot/clean/task_1061_isaac_state_train",
      "description": "Real LeRobot demo for task 1061: Rotate the Grinder. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 21,
        "cleanEpisodes": 12,
        "cleanFrames": 548,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1061-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1061-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1061-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1061_isaac_state_train",
        "episodes": 21,
        "frames": 968,
        "fps": 30,
        "durationSeconds": 32.266666666666666
      }
    },
    {
      "id": "AXIS-1062",
      "taskId": 1062,
      "title": "Put the Chew Toy into the Bowl",
      "slug": "put_the_chew_toy_into_the_bowl",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1062_isaac_state_train",
      "description": "Real LeRobot demo for task 1062: Put the Chew Toy into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 22,
        "cleanEpisodes": 3,
        "cleanFrames": 118,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1062-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 39,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1062-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1062-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1062_isaac_state_train",
        "episodes": 22,
        "frames": 884,
        "fps": 30,
        "durationSeconds": 29.466666666666665
      }
    },
    {
      "id": "AXIS-1064",
      "taskId": 1064,
      "title": "Put the Shovel into the Bowl",
      "slug": "put_the_shovel_into_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Shovel",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1064_isaac_state_train",
      "description": "Real LeRobot demo for task 1064: Put the Shovel into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 58,
        "cleanEpisodes": 8,
        "cleanFrames": 388,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1064-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 48,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1064-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1064-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1064_isaac_state_train",
        "episodes": 58,
        "frames": 2684,
        "fps": 30,
        "durationSeconds": 89.46666666666667
      }
    },
    {
      "id": "AXIS-1065",
      "taskId": 1065,
      "title": "Put the Dog Ball beside the Chew Toy",
      "slug": "put_the_dog_ball_beside_the_chew_toy",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dog Ball",
        "Chew Toy"
      ],
      "source": "data_lerobot/clean/task_1065_isaac_state_train",
      "description": "Real LeRobot demo for task 1065: Put the Dog Ball beside the Chew Toy. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 60,
        "cleanEpisodes": 18,
        "cleanFrames": 834,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1065-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1065-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1065-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1065_isaac_state_train",
        "episodes": 60,
        "frames": 2698,
        "fps": 30,
        "durationSeconds": 89.93333333333334
      }
    },
    {
      "id": "AXIS-1066",
      "taskId": 1066,
      "title": "Put the Dog Ball in the Shovel",
      "slug": "put_the_dog_ball_in_the_shovel",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dog Ball",
        "Shovel"
      ],
      "source": "data_lerobot/clean/task_1066_isaac_state_train",
      "description": "Real LeRobot demo for task 1066: Put the Dog Ball in the Shovel. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 55,
        "cleanEpisodes": 10,
        "cleanFrames": 470,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1066-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 47,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1066-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1066-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1066_isaac_state_train",
        "episodes": 55,
        "frames": 2749,
        "fps": 30,
        "durationSeconds": 91.63333333333334
      }
    },
    {
      "id": "AXIS-1067",
      "taskId": 1067,
      "title": "Rotate the Shovel",
      "slug": "rotate_the_shovel",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Shovel"
      ],
      "source": "data_lerobot/clean/task_1067_isaac_state_train",
      "description": "Real LeRobot demo for task 1067: Rotate the Shovel. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 69,
        "cleanEpisodes": 49,
        "cleanFrames": 1916,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1067-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 39,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1067-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1067-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1067_isaac_state_train",
        "episodes": 69,
        "frames": 2621,
        "fps": 30,
        "durationSeconds": 87.36666666666666
      }
    },
    {
      "id": "AXIS-1068",
      "taskId": 1068,
      "title": "Put the Lipstick into the Basket",
      "slug": "put_the_lipstick_into_the_basket",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Lipstick",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1068_isaac_state_train",
      "description": "Real LeRobot demo for task 1068: Put the Lipstick into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 66,
        "cleanEpisodes": 1,
        "cleanFrames": 42,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1068-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 42,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1068-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1068-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1068_isaac_state_train",
        "episodes": 66,
        "frames": 2686,
        "fps": 30,
        "durationSeconds": 89.53333333333333
      }
    },
    {
      "id": "AXIS-1069",
      "taskId": 1069,
      "title": "Put the Compact Powder into the Basket",
      "slug": "put_the_compact_powder_into_the_basket",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Compact Powder",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1069_isaac_state_train",
      "description": "Real LeRobot demo for task 1069: Put the Compact Powder into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 52,
        "cleanEpisodes": 4,
        "cleanFrames": 208,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1069-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1069-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1069-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1069_isaac_state_train",
        "episodes": 52,
        "frames": 2545,
        "fps": 30,
        "durationSeconds": 84.83333333333333
      }
    },
    {
      "id": "AXIS-1070",
      "taskId": 1070,
      "title": "Put the Comb into the Basket",
      "slug": "put_the_comb_into_the_basket",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1070_isaac_state_train",
      "description": "Real LeRobot demo for task 1070: Put the Comb into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 53,
        "cleanEpisodes": 4,
        "cleanFrames": 190,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1070-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 48,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1070-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1070-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1070_isaac_state_train",
        "episodes": 53,
        "frames": 2608,
        "fps": 30,
        "durationSeconds": 86.93333333333334
      }
    },
    {
      "id": "AXIS-1071",
      "taskId": 1071,
      "title": "Put the Lipstick on the Compact Powder",
      "slug": "put_the_lipstick_on_the_compact_powder",
      "category": "Placement",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Lipstick",
        "Compact Powder"
      ],
      "source": "data_lerobot/clean/task_1071_isaac_state_train",
      "description": "Real LeRobot demo for task 1071: Put the Lipstick on the Compact Powder. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 54,
        "cleanEpisodes": 1,
        "cleanFrames": 44,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1071-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1071-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1071-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1071_isaac_state_train",
        "episodes": 54,
        "frames": 2625,
        "fps": 30,
        "durationSeconds": 87.5
      }
    },
    {
      "id": "AXIS-1072",
      "taskId": 1072,
      "title": "Put the Lipstick beside the Comb",
      "slug": "put_the_lipstick_beside_the_comb",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Lipstick",
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1072_isaac_state_train",
      "description": "Real LeRobot demo for task 1072: Put the Lipstick beside the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 61,
        "cleanEpisodes": 5,
        "cleanFrames": 193,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1072-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 39,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1072-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1072-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1072_isaac_state_train",
        "episodes": 61,
        "frames": 2361,
        "fps": 30,
        "durationSeconds": 78.7
      }
    },
    {
      "id": "AXIS-1073",
      "taskId": 1073,
      "title": "Rotate the Comb",
      "slug": "rotate_the_comb",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1073_isaac_state_train",
      "description": "Real LeRobot demo for task 1073: Rotate the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 58,
        "cleanEpisodes": 32,
        "cleanFrames": 1423,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1073-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1073-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1073-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1073_isaac_state_train",
        "episodes": 58,
        "frames": 2611,
        "fps": 30,
        "durationSeconds": 87.03333333333333
      }
    },
    {
      "id": "AXIS-1074",
      "taskId": 1074,
      "title": "Put the Cup on the Coaster",
      "slug": "put_the_cup_on_the_coaster",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Coaster"
      ],
      "source": "data_lerobot/clean/task_1074_isaac_state_train",
      "description": "Real LeRobot demo for task 1074: Put the Cup on the Coaster. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 55,
        "cleanEpisodes": 6,
        "cleanFrames": 279,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1074-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1074-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1074-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1074_isaac_state_train",
        "episodes": 55,
        "frames": 2598,
        "fps": 30,
        "durationSeconds": 86.6
      }
    },
    {
      "id": "AXIS-1075",
      "taskId": 1075,
      "title": "Put the Liquor on the Coaster",
      "slug": "put_the_liquor_on_the_coaster",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Liquor",
        "Coaster"
      ],
      "source": "data_lerobot/clean/task_1075_isaac_state_train",
      "description": "Real LeRobot demo for task 1075: Put the Liquor on the Coaster. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 60,
        "cleanEpisodes": 8,
        "cleanFrames": 337,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1075-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 42,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1075-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1075-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1075_isaac_state_train",
        "episodes": 60,
        "frames": 2467,
        "fps": 30,
        "durationSeconds": 82.23333333333333
      }
    },
    {
      "id": "AXIS-1076",
      "taskId": 1076,
      "title": "Put the Ketchup on the Coaster",
      "slug": "put_the_ketchup_on_the_coaster",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ketchup",
        "Coaster"
      ],
      "source": "data_lerobot/clean/task_1076_isaac_state_train",
      "description": "Real LeRobot demo for task 1076: Put the Ketchup on the Coaster. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 46,
        "cleanEpisodes": 13,
        "cleanFrames": 673,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1076-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1076-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1076-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1076_isaac_state_train",
        "episodes": 46,
        "frames": 2304,
        "fps": 30,
        "durationSeconds": 76.8
      }
    },
    {
      "id": "AXIS-1077",
      "taskId": 1077,
      "title": "Put the Cup beside the Ketchup",
      "slug": "put_the_cup_beside_the_ketchup",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Ketchup"
      ],
      "source": "data_lerobot/clean/task_1077_isaac_state_train",
      "description": "Real LeRobot demo for task 1077: Put the Cup beside the Ketchup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 54,
        "cleanEpisodes": 7,
        "cleanFrames": 300,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1077-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 43,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1077-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1077-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1077_isaac_state_train",
        "episodes": 54,
        "frames": 2294,
        "fps": 30,
        "durationSeconds": 76.46666666666667
      }
    },
    {
      "id": "AXIS-1079",
      "taskId": 1079,
      "title": "Put the Ketchup beside the Liquor",
      "slug": "put_the_ketchup_beside_the_liquor",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ketchup",
        "Liquor"
      ],
      "source": "data_lerobot/local/task_1079_isaac_state_train",
      "description": "Real LeRobot demo for task 1079: Put the Ketchup beside the Liquor. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1196,
        "cleanEpisodes": 311,
        "cleanFrames": 27618,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1079-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1079-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1079-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1079_isaac_state_train",
        "episodes": 1196,
        "frames": 126866,
        "fps": 30,
        "durationSeconds": 4228.866666666667
      }
    },
    {
      "id": "AXIS-1080",
      "taskId": 1080,
      "title": "Put the Eggplant on the Plate",
      "slug": "put_the_eggplant_on_the_plate",
      "category": "Placement",
      "difficulty": 5,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eggplant",
        "Plate"
      ],
      "source": "data_lerobot/local/task_1080_isaac_state_train",
      "description": "Real LeRobot demo for task 1080: Put the Eggplant on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 485,
        "cleanFrames": 69878,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1080-DEMO",
          "collector": "local LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 144,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1080-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1080-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1080_isaac_state_train",
        "episodes": 1205,
        "frames": 155474,
        "fps": 30,
        "durationSeconds": 5182.466666666666
      }
    },
    {
      "id": "AXIS-1081",
      "taskId": 1081,
      "title": "Put the Onion on the Plate",
      "slug": "put_the_onion_on_the_plate",
      "category": "Placement",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Onion",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_1081_isaac_state_train",
      "description": "Real LeRobot demo for task 1081: Put the Onion on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 43,
        "cleanEpisodes": 34,
        "cleanFrames": 1819,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1081-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 54,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1081-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1081-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1081_isaac_state_train",
        "episodes": 43,
        "frames": 2293,
        "fps": 30,
        "durationSeconds": 76.43333333333334
      }
    },
    {
      "id": "AXIS-1083",
      "taskId": 1083,
      "title": "Put the Eggplant into the Bowl",
      "slug": "put_the_eggplant_into_the_bowl",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eggplant",
        "Bowl"
      ],
      "source": "data_lerobot/local/task_1083_isaac_state_train",
      "description": "Real LeRobot demo for task 1083: Put the Eggplant into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1203,
        "cleanEpisodes": 601,
        "cleanFrames": 75114,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1083-DEMO",
          "collector": "local LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1083-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1083-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1083_isaac_state_train",
        "episodes": 1203,
        "frames": 146763,
        "fps": 30,
        "durationSeconds": 4892.1
      }
    },
    {
      "id": "AXIS-1084",
      "taskId": 1084,
      "title": "Put the Onion into the Bowl",
      "slug": "put_the_onion_into_the_bowl",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Onion",
        "Bowl"
      ],
      "source": "data_lerobot/local/task_1084_isaac_state_train",
      "description": "Real LeRobot demo for task 1084: Put the Onion into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 464,
        "cleanFrames": 46426,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1084-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 100,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1084-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1084-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1084_isaac_state_train",
        "episodes": 1204,
        "frames": 150704,
        "fps": 30,
        "durationSeconds": 5023.466666666666
      }
    },
    {
      "id": "AXIS-1085",
      "taskId": 1085,
      "title": "Put the Onion beside the Eggplant",
      "slug": "put_the_onion_beside_the_eggplant",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Onion",
        "Eggplant"
      ],
      "source": "data_lerobot/local/task_1085_isaac_state_train",
      "description": "Real LeRobot demo for task 1085: Put the Onion beside the Eggplant. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 603,
        "cleanFrames": 75195,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1085-DEMO",
          "collector": "local LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1085-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1085-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1085_isaac_state_train",
        "episodes": 1204,
        "frames": 147409,
        "fps": 30,
        "durationSeconds": 4913.633333333333
      }
    },
    {
      "id": "AXIS-1088",
      "taskId": 1088,
      "title": "Put the Medicine Bottle on the Medicine Case",
      "slug": "put_the_medicine_bottle_on_the_medicine_case",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Medicine Bottle",
        "Medicine Case"
      ],
      "source": "data_lerobot/local/task_1088_isaac_state_train",
      "description": "Real LeRobot demo for task 1088: Put the Medicine Bottle on the Medicine Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1200,
        "cleanEpisodes": 119,
        "cleanFrames": 12233,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1088-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 103,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1088-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1088-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1088_isaac_state_train",
        "episodes": 1200,
        "frames": 125262,
        "fps": 30,
        "durationSeconds": 4175.4
      }
    },
    {
      "id": "AXIS-1107",
      "taskId": 1107,
      "title": "Pick from clutter",
      "slug": "pick_from_clutter",
      "category": "Manipulation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pick",
        "clutter"
      ],
      "source": "data_lerobot/clean/task_1107_isaac_state_train",
      "description": "Real LeRobot demo for task 1107: Pick from clutter. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 621,
        "cleanEpisodes": 326,
        "cleanFrames": 13664,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1107-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 42,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1107-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1107-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1107_isaac_state_train",
        "episodes": 621,
        "frames": 25098,
        "fps": 30,
        "durationSeconds": 836.6
      }
    },
    {
      "id": "AXIS-1111",
      "taskId": 1111,
      "title": "Sort by category",
      "slug": "sort_by_category",
      "category": "Manipulation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sort by category"
      ],
      "source": "data_lerobot/clean/task_1111_isaac_state_train",
      "description": "Real LeRobot demo for task 1111: Sort by category. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 23,
        "cleanEpisodes": 2,
        "cleanFrames": 157,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1111-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 78,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1111-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1111-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1111_isaac_state_train",
        "episodes": 23,
        "frames": 2014,
        "fps": 30,
        "durationSeconds": 67.13333333333334
      }
    },
    {
      "id": "AXIS-1116",
      "taskId": 1116,
      "title": "Power grasp",
      "slug": "power_grasp",
      "category": "Grasping",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Power grasp"
      ],
      "source": "data_lerobot/clean/task_1116_isaac_state_train",
      "description": "Real LeRobot demo for task 1116: Power grasp. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1162,
        "cleanEpisodes": 1162,
        "cleanFrames": 57846,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1116-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 50,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1116-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1116-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1116_isaac_state_train",
        "episodes": 1162,
        "frames": 57846,
        "fps": 30,
        "durationSeconds": 1928.2
      }
    },
    {
      "id": "AXIS-1139",
      "taskId": 1139,
      "title": "Rearrange Your Table 3 - LH",
      "slug": "rearrange_your_table_3_lh",
      "category": "Rearrangement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Your Table 3 - LH"
      ],
      "source": "data_lerobot/clean/task_1139_isaac_state_train",
      "description": "Real LeRobot demo for task 1139: Rearrange Your Table 3 - LH. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 796,
        "cleanEpisodes": 128,
        "cleanFrames": 18292,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1139-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 143,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1139-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1139-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1139_isaac_state_train",
        "episodes": 796,
        "frames": 115187,
        "fps": 30,
        "durationSeconds": 3839.5666666666666
      }
    },
    {
      "id": "AXIS-1140",
      "taskId": 1140,
      "title": "Rearrange Your Table 4 - LH",
      "slug": "rearrange_your_table_4_lh",
      "category": "Rearrangement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Your Table 4 - LH"
      ],
      "source": "data_lerobot/clean/task_1140_isaac_state_train",
      "description": "Real LeRobot demo for task 1140: Rearrange Your Table 4 - LH. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 950,
        "cleanEpisodes": 191,
        "cleanFrames": 21459,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1140-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1140-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1140-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1140_isaac_state_train",
        "episodes": 950,
        "frames": 113805,
        "fps": 30,
        "durationSeconds": 3793.5
      }
    },
    {
      "id": "AXIS-1141",
      "taskId": 1141,
      "title": "Rearrange Your Table 5 - LH",
      "slug": "rearrange_your_table_5_lh",
      "category": "Rearrangement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Your Table 5 - LH"
      ],
      "source": "data_lerobot/clean/task_1141_isaac_state_train",
      "description": "Real LeRobot demo for task 1141: Rearrange Your Table 5 - LH. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 201,
        "cleanEpisodes": 93,
        "cleanFrames": 10317,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1141-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 111,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1141-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1141-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1141_isaac_state_train",
        "episodes": 201,
        "frames": 22642,
        "fps": 30,
        "durationSeconds": 754.7333333333333
      }
    },
    {
      "id": "AXIS-1149",
      "taskId": 1149,
      "title": "Push object to target",
      "slug": "push_object_to_target",
      "category": "Manipulation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Push object to target"
      ],
      "source": "data_lerobot/clean/task_1149_isaac_state_train",
      "description": "Real LeRobot demo for task 1149: Push object to target. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1369,
        "cleanEpisodes": 456,
        "cleanFrames": 33433,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1149-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 73,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1149-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1149-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1149_isaac_state_train",
        "episodes": 1369,
        "frames": 87781,
        "fps": 30,
        "durationSeconds": 2926.0333333333333
      }
    },
    {
      "id": "AXIS-1150",
      "taskId": 1150,
      "title": "Push around obstacle",
      "slug": "push_around_obstacle",
      "category": "Manipulation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Push around obstacle"
      ],
      "source": "data_lerobot/clean/task_1150_isaac_state_train",
      "description": "Real LeRobot demo for task 1150: Push around obstacle. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1183,
        "cleanEpisodes": 158,
        "cleanFrames": 15274,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1150-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 97,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1150-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1150-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1150_isaac_state_train",
        "episodes": 1183,
        "frames": 109798,
        "fps": 30,
        "durationSeconds": 3659.9333333333334
      }
    },
    {
      "id": "AXIS-1151",
      "taskId": 1151,
      "title": "Put lid back",
      "slug": "put_lid_back",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "lid back"
      ],
      "source": "data_lerobot/clean/task_1151_isaac_state_train",
      "description": "Real LeRobot demo for task 1151: Put lid back. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 937,
        "cleanEpisodes": 1,
        "cleanFrames": 96,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1151-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 96,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1151-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1151-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1151_isaac_state_train",
        "episodes": 937,
        "frames": 113946,
        "fps": 30,
        "durationSeconds": 3798.2
      }
    },
    {
      "id": "AXIS-1152",
      "taskId": 1152,
      "title": "Fit lid onto container",
      "slug": "fit_lid_onto_container",
      "category": "Manipulation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Fit lid onto container"
      ],
      "source": "data_lerobot/clean/task_1152_isaac_state_train",
      "description": "Real LeRobot demo for task 1152: Fit lid onto container. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1045,
        "cleanEpisodes": 1,
        "cleanFrames": 214,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1152-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 214,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/task-demos/task-1152-third-person.mp4",
            "wrist": "./assets/videos/task-demos/task-1152-wrist.mp4"
          }
        }
      ],
      "localStats": {
        "source": "data_lerobot/local/task_1152_isaac_state_train",
        "episodes": 1045,
        "frames": 112342,
        "fps": 30,
        "durationSeconds": 3744.733333333333
      }
    }
  ],
  "manifestNote": "One representative real demo per exported task. All required videos are packaged under assets/videos/task-demos. Large local fallback sources were transcoded to browser-friendly H.264 MP4; no placeholder videos or symlinks are used.",
  "remoteUnrenderedTasks": [
    {
      "id": "AXIS-22-REMOTE",
      "taskId": 22,
      "title": "Grab Can",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 4,
      "durationSeconds": 16.585517167915352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-03-31T12:24:51.119275+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-57-REMOTE",
      "taskId": 57,
      "title": "Turn Off Stove",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-04-16T02:26:20.577281+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-99-REMOTE",
      "taskId": 99,
      "title": "Hang the Hanger",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-04-10T08:07:35.413035+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-124-REMOTE",
      "taskId": 124,
      "title": "Booster grasp cube into basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 656,
      "durationSeconds": 2720.0248155381178,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T11:47:25.246264+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-174-REMOTE",
      "taskId": 174,
      "title": "Stack Cubes 1",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 779,
      "durationSeconds": 3230.0294684515147,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:19:45.245209+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-176-REMOTE",
      "taskId": 176,
      "title": "Reposition The Toy Stove",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2163,
      "durationSeconds": 8968.618408550226,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T09:59:39.239081+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-177-REMOTE",
      "taskId": 177,
      "title": "Move The Skincare Product Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1702,
      "durationSeconds": 7057.137554947983,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T07:00:17.274608+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-178-REMOTE",
      "taskId": 178,
      "title": "Rearrange The Two Loose Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2134,
      "durationSeconds": 8848.37340908284,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T05:42:53.233852+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-179-REMOTE",
      "taskId": 179,
      "title": "Skincare Product Box to the Toy Airplane",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2456,
      "durationSeconds": 10183.507541100027,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:20:39.287555+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-181-REMOTE",
      "taskId": 181,
      "title": "Set The Mug Beside The Sneaker",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2217,
      "durationSeconds": 9192.522890317085,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:54:19.221091+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-182-REMOTE",
      "taskId": 182,
      "title": "Place Mug on the Skincare Set Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1528,
      "durationSeconds": 6335.667558143665,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T06:13:35.260551+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-183-REMOTE",
      "taskId": 183,
      "title": "Place Airplane next to the Sneaker",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1469,
      "durationSeconds": 6091.031179916913,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-20T05:04:39.152919+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-184-REMOTE",
      "taskId": 184,
      "title": "Create A Neat Straight Line Arrangement",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1756,
      "durationSeconds": 7281.04203671484,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-13T13:06:15.214390+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-185-REMOTE",
      "taskId": 185,
      "title": "Sort Sneaker and Mug",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2233,
      "durationSeconds": 9258.864958988745,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:54:31.185857+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-186-REMOTE",
      "taskId": 186,
      "title": "Banana and Sneaker to the Toy Playset",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2076,
      "durationSeconds": 8607.883410148068,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:54:43.206000+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-187-REMOTE",
      "taskId": 187,
      "title": "Sneaker to the Banana",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 844,
      "durationSeconds": 3499.5441224301394,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:19:49.287608+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-188-REMOTE",
      "taskId": 188,
      "title": "Rearrange the Banana, the Shark and the Strainer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 827,
      "durationSeconds": 3429.055674466499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:19:53.257468+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-189-REMOTE",
      "taskId": 189,
      "title": "Move Banana to the Toy Playset",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 953,
      "durationSeconds": 3951.4994652558325,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:20:17.296030+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-190-REMOTE",
      "taskId": 190,
      "title": "Place Egg on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1067,
      "durationSeconds": 4424.18670454142,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:19:59.257591+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-191-REMOTE",
      "taskId": 191,
      "title": "Put Knife on the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1235,
      "durationSeconds": 5120.778425593865,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:53:55.187358+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-192-REMOTE",
      "taskId": 192,
      "title": "Put the Flower Pot next to the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1138,
      "durationSeconds": 4718.579634271918,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:54:07.208727+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-193-REMOTE",
      "taskId": 193,
      "title": "Place Knife to the Plate and Egg to the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3319,
      "durationSeconds": 13761.832870077764,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:18:17.269939+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-194-REMOTE",
      "taskId": 194,
      "title": "Put Knife and Brush to the Right of the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3374,
      "durationSeconds": 13989.883731136599,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:18:35.254276+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-195-REMOTE",
      "taskId": 195,
      "title": "Rearrange Croissant and Skincare Box to the Stove",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 935,
      "durationSeconds": 3876.8646380002137,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-14T14:22:45.210723+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-197-REMOTE",
      "taskId": 197,
      "title": "Pick up and Hold the Bowl in the Air 4",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 670,
      "durationSeconds": 2778.0741256258216,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:59.237849+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-198-REMOTE",
      "taskId": 198,
      "title": "Put the Bowl on the Plate 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 560,
      "durationSeconds": 2321.9724035081495,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T07:35:44.590156+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-199-REMOTE",
      "taskId": 199,
      "title": "Put the Cup into the Bowl 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 659,
      "durationSeconds": 2732.4639534140542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-12T05:27:41.195072+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-200-REMOTE",
      "taskId": 200,
      "title": "Put the Mug beside the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 742,
      "durationSeconds": 3076.6134346482977,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-25T11:38:19.221845+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-201-REMOTE",
      "taskId": 201,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1322,
      "durationSeconds": 5481.513423996023,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:56:39.204570+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-202-REMOTE",
      "taskId": 202,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1187,
      "durationSeconds": 4921.752219578881,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:56:53.210888+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-203-REMOTE",
      "taskId": 203,
      "title": "Put the Cup beside the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 464,
      "durationSeconds": 1923.919991478181,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-25T17:25:27.226283+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-204-REMOTE",
      "taskId": 204,
      "title": "Put the Mug into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 483,
      "durationSeconds": 2002.7011980257787,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-25T11:38:09.217744+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-205-REMOTE",
      "taskId": 205,
      "title": "Put the Mug onto the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 550,
      "durationSeconds": 2280.508610588361,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-25T11:38:03.216798+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-206-REMOTE",
      "taskId": 206,
      "title": "Put the Cup onto the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 456,
      "durationSeconds": 1890.74895714235,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T16:26:37.244776+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-207-REMOTE",
      "taskId": 207,
      "title": "Put the Mug beside the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 710,
      "durationSeconds": 2943.929297304975,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-25T17:28:37.222761+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-208-REMOTE",
      "taskId": 208,
      "title": "Put the Cup beside the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 783,
      "durationSeconds": 3246.61498561943,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-25T17:28:43.227842+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-209-REMOTE",
      "taskId": 209,
      "title": "Pick up the Cup and Hold it in the Air",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 490,
      "durationSeconds": 2031.7258530696306,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T05:04:09.273453+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-210-REMOTE",
      "taskId": 210,
      "title": "Pick up the Mug and Hold it in the Air",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 528,
      "durationSeconds": 2189.2882661648264,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T05:45:51.211031+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-268-REMOTE",
      "taskId": 268,
      "title": "Place the cup next to the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1829,
      "durationSeconds": 7583.727725029295,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:50:57.234870+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-269-REMOTE",
      "taskId": 269,
      "title": "Pick up and Hold the Bowl in the Air",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2398,
      "durationSeconds": 9943.017542165253,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:51:15.255600+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-270-REMOTE",
      "taskId": 270,
      "title": "Place the Bowl on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1912,
      "durationSeconds": 7927.877206263538,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:51:25.255259+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-271-REMOTE",
      "taskId": 271,
      "title": "Place the Mug into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1739,
      "durationSeconds": 7210.5535887512,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:51:21.252701+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-272-REMOTE",
      "taskId": 272,
      "title": "Place the Mug next to the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1629,
      "durationSeconds": 6754.451866633527,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:51:01.242924+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-273-REMOTE",
      "taskId": 273,
      "title": "Pick up and Hold the Bowl in the Air 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1286,
      "durationSeconds": 5332.243769484786,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:18:13.273202+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-274-REMOTE",
      "taskId": 274,
      "title": "Place the Bowl on the Plate 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 587,
      "durationSeconds": 2433.924644391578,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:50:03.276862+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-275-REMOTE",
      "taskId": 275,
      "title": "Place the Cup into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 762,
      "durationSeconds": 3159.5410204878744,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:50:49.249992+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-276-REMOTE",
      "taskId": 276,
      "title": "Place the Cup on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 558,
      "durationSeconds": 2313.6796449241915,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:50:07.266086+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-277-REMOTE",
      "taskId": 277,
      "title": "Pick up and Hold the Bowl in the Air 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 794,
      "durationSeconds": 3292.2251578311975,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:50:47.248913+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-278-REMOTE",
      "taskId": 278,
      "title": "Set Bottle Beside Kettle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3110,
      "durationSeconds": 12895.239598054186,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:18:57.262653+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-279-REMOTE",
      "taskId": 279,
      "title": "Place Squeeze Bottle to the Placemat",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3006,
      "durationSeconds": 12464.016151688387,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:18:41.232452+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-280-REMOTE",
      "taskId": 280,
      "title": "Move the Loafer to the Kettle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2917,
      "durationSeconds": 12094.98839470227,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:19:05.296299+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-281-REMOTE",
      "taskId": 281,
      "title": "Place the Kettle to the Placemat",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2408,
      "durationSeconds": 9984.481335085042,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T07:19:39.263602+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-282-REMOTE",
      "taskId": 282,
      "title": "Rearrange Bottle, Toast, and Running Shoe",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 806,
      "durationSeconds": 3341.9817093349434,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-27T20:38:31.306294+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-283-REMOTE",
      "taskId": 283,
      "title": "Rearrange Four Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1263,
      "durationSeconds": 5236.877045769273,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-12T05:27:57.168966+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-284-REMOTE",
      "taskId": 284,
      "title": "Place Shoes in different places",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1093,
      "durationSeconds": 4531.99256613287,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-12T05:15:55.194440+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-285-REMOTE",
      "taskId": 285,
      "title": "Rearrange Bottle and Toast",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1049,
      "durationSeconds": 4349.551877285801,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-18T12:41:35.181071+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-286-REMOTE",
      "taskId": 286,
      "title": "Set Orange on the Shelf",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 914,
      "durationSeconds": 3789.790672868658,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T06:22:23.234945+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-287-REMOTE",
      "taskId": 287,
      "title": "Put Orange into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1140,
      "durationSeconds": 4726.872392855876,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T06:23:29.302261+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-288-REMOTE",
      "taskId": 288,
      "title": "Place the Bowl on the Shelf",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 780,
      "durationSeconds": 3234.1758477434937,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:50:41.248930+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-289-REMOTE",
      "taskId": 289,
      "title": "Put Cup Beside Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 894,
      "durationSeconds": 3706.8630870290813,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T09:50:53.220119+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-290-REMOTE",
      "taskId": 290,
      "title": "Pair the Bottles",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 521,
      "durationSeconds": 2160.2636111209745,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T05:04:23.292383+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-291-REMOTE",
      "taskId": 291,
      "title": "Align Three Items in a Line",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 563,
      "durationSeconds": 2334.411541384086,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T05:03:59.249849+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-292-REMOTE",
      "taskId": 292,
      "title": "Cup Right of Cinnamon Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 470,
      "durationSeconds": 1948.7982672300539,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:52:53.204386+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-293-REMOTE",
      "taskId": 293,
      "title": "Straight Row Arrangement",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3,
      "durationSeconds": 12.439137875936513,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-04-10T08:16:05.677125+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-394-REMOTE",
      "taskId": 394,
      "title": "Put the Mango on the Top Tier of the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 579,
      "durationSeconds": 2400.7536100557472,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:49.260679+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-395-REMOTE",
      "taskId": 395,
      "title": "Put the Orange on the Top Tier of the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 748,
      "durationSeconds": 3101.4917104001706,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T07:00:19.256158+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-396-REMOTE",
      "taskId": 396,
      "title": "Put the Sprinkles on the Top Tier of the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 343,
      "durationSeconds": 1422.2080971487414,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:45.242014+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-397-REMOTE",
      "taskId": 397,
      "title": "Put the Soap Dispenser on the Top Tier of the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 378,
      "durationSeconds": 1567.3313723680008,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:06:37.315917+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-398-REMOTE",
      "taskId": 398,
      "title": "Pair the Fruits",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 458,
      "durationSeconds": 1899.0417157263078,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:33.236763+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-399-REMOTE",
      "taskId": 399,
      "title": "Put both Fruits on the Top Tier of the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 390,
      "durationSeconds": 1617.0879238717469,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:06:17.291880+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-406-REMOTE",
      "taskId": 406,
      "title": "Put the Cupcake next to the Sandal",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 537,
      "durationSeconds": 2226.6056797926362,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T16:26:31.236528+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-407-REMOTE",
      "taskId": 407,
      "title": "Put the Cupcake on the Centre of the Saucer Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 657,
      "durationSeconds": 2724.1711948300967,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:56:25.210891+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-408-REMOTE",
      "taskId": 408,
      "title": "Put the Supplement Bottle on the Centre of the Saucer Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 501,
      "durationSeconds": 2077.3360252813977,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T05:46:47.224640+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-409-REMOTE",
      "taskId": 409,
      "title": "Put the Sandal beside the Saucer Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 652,
      "durationSeconds": 2703.4392983702023,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:56:11.213845+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-410-REMOTE",
      "taskId": 410,
      "title": "Put the Cupcake beside the Supplement Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 594,
      "durationSeconds": 2462.9492994354296,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T05:47:47.246470+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-411-REMOTE",
      "taskId": 411,
      "title": "Put the Supplement Bottle beside the Sandal",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 901,
      "durationSeconds": 3735.887742072933,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:27.238336+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-412-REMOTE",
      "taskId": 412,
      "title": "Put the Soap Between the Chips and the Eggplant",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 710,
      "durationSeconds": 2943.929297304975,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T07:00:33.279937+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-413-REMOTE",
      "taskId": 413,
      "title": "Put the Soap on the Strainer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 704,
      "durationSeconds": 2919.051021553102,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T16:26:25.254076+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-414-REMOTE",
      "taskId": 414,
      "title": "Put the Canned Food on the Towels",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 850,
      "durationSeconds": 3524.4223981820123,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:37.225983+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-415-REMOTE",
      "taskId": 415,
      "title": "Put the Eggplant beside the Soap",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 830,
      "durationSeconds": 3441.4948123424356,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:23.213890+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-416-REMOTE",
      "taskId": 416,
      "title": "Put the Chips and the Eggplant on the Towels",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 768,
      "durationSeconds": 3184.4192962397474,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-11T17:46:05.365839+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-417-REMOTE",
      "taskId": 417,
      "title": "Put the Canned Food between the Towels and the Strainer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 499,
      "durationSeconds": 2069.0432666974402,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:53:43.166277+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-418-REMOTE",
      "taskId": 418,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 526,
      "durationSeconds": 2180.995507580869,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:53:31.209684+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-419-REMOTE",
      "taskId": 419,
      "title": "Put the Ballet Flat beside the Paper Towel Holder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 553,
      "durationSeconds": 2292.9477484642975,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:53:17.193561+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-420-REMOTE",
      "taskId": 420,
      "title": "Put the Hot Dog beside the Ballet Flat",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 621,
      "durationSeconds": 2574.901540318858,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:05:13.281827+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-421-REMOTE",
      "taskId": 421,
      "title": "Put both Tools beside the Paper Towel Holder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 407,
      "durationSeconds": 1687.5763718353871,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:49:13.240095+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-422-REMOTE",
      "taskId": 422,
      "title": "Put the Hot Dog between the Knife and the Screwdriver",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 740,
      "durationSeconds": 3068.32067606434,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:26:11.265215+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-423-REMOTE",
      "taskId": 423,
      "title": "Rearrange Four Items in Two Groups",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 752,
      "durationSeconds": 3118.077227568086,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:58:33.272207+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-424-REMOTE",
      "taskId": 424,
      "title": "Put the Memo Board beside the Paper Towel Holder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 450,
      "durationSeconds": 1865.870681390477,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T05:03:55.269410+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-425-REMOTE",
      "taskId": 425,
      "title": "Put the Memo Board beside the Knife Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 652,
      "durationSeconds": 2703.4392983702023,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T05:04:05.245262+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-426-REMOTE",
      "taskId": 426,
      "title": "Put the Ice Cube Tray beside the Memo Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 563,
      "durationSeconds": 2334.411541384086,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:04:23.241140+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-427-REMOTE",
      "taskId": 427,
      "title": "Put the Knife Block beside the Paper Towel Holder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 600,
      "durationSeconds": 2487.827575187303,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:56:25.273514+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-428-REMOTE",
      "taskId": 428,
      "title": "Put the Ice Cube Tray between Two Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 323,
      "durationSeconds": 1339.2805113091647,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-22T14:56:17.223571+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-429-REMOTE",
      "taskId": 429,
      "title": "Put the Ice Cube Tray between Two Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 438,
      "durationSeconds": 1816.114129886731,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:03:53.244524+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-430-REMOTE",
      "taskId": 430,
      "title": "Put the Bag of Flour beside the Mini Square Stool",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 358,
      "durationSeconds": 1484.403786528424,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:52:31.309781+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-431-REMOTE",
      "taskId": 431,
      "title": "Put the Bag of Flour on the Mini Square Stool",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 343,
      "durationSeconds": 1422.2080971487414,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:52:07.257846+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-432-REMOTE",
      "taskId": 432,
      "title": "Put the Toy Orca beside the Boot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 364,
      "durationSeconds": 1509.282062280297,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:23.311020+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-433-REMOTE",
      "taskId": 433,
      "title": "Put the Bag of Flour beside the Boot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 313,
      "durationSeconds": 1297.8167183893763,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:27.256674+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-434-REMOTE",
      "taskId": 434,
      "title": "Put the Toy Orca beside the Mini Square Stool",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 783,
      "durationSeconds": 3246.61498561943,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:29.293778+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-435-REMOTE",
      "taskId": 435,
      "title": "Group Items by the Mini Square Stool",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 721,
      "durationSeconds": 2989.5394695167424,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:03:51.238612+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-445-REMOTE",
      "taskId": 445,
      "title": "Put the Potato and the Chips on the Center of the Lid",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 528,
      "durationSeconds": 2189.2882661648264,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:56:01.251975+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-446-REMOTE",
      "taskId": 446,
      "title": "Put the Scissors on the Left of the Potato",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 554,
      "durationSeconds": 2297.094127756276,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:49.318796+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-447-REMOTE",
      "taskId": 447,
      "title": "Put the Potato on the Right of the Protein Container",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 756,
      "durationSeconds": 3134.6627447360015,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:33.313299+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-448-REMOTE",
      "taskId": 448,
      "title": "Put the Pink Wireless Band in front of the Protein Container",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 598,
      "durationSeconds": 2479.534816603345,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:41.303159+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-449-REMOTE",
      "taskId": 449,
      "title": "Put the Toy Horse on the Left of the Pink Wireless Band",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 617,
      "durationSeconds": 2558.3160231509432,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:37.243672+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-450-REMOTE",
      "taskId": 450,
      "title": "Put the Scissors behind the Protein Container",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 477,
      "durationSeconds": 1977.8229222739058,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:57.232292+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-451-REMOTE",
      "taskId": 451,
      "title": "Rearrange the Three Items in a Front-Back Row",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 360,
      "durationSeconds": 1492.6965451123817,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T07:18:21.268301+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-460-REMOTE",
      "taskId": 460,
      "title": "Put the Capsule Bottle on the Pancakes",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 773,
      "durationSeconds": 3205.151192699642,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:56:05.233091+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-461-REMOTE",
      "taskId": 461,
      "title": "Put the Capsule Bottle beside the Toy Sink",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 791,
      "durationSeconds": 3279.786019955261,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:56:11.267450+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-462-REMOTE",
      "taskId": 462,
      "title": "Put the Spoon on the Toy Sink",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 760,
      "durationSeconds": 3151.248261903917,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:56:21.345515+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-463-REMOTE",
      "taskId": 463,
      "title": "Put the Spoon on the Pancakes",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 618,
      "durationSeconds": 2562.4624024429218,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:01.244200+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-464-REMOTE",
      "taskId": 464,
      "title": "Put the Capsule Bottle beside the Spoon",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 509,
      "durationSeconds": 2110.5070596172286,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:07:55.246097+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-465-REMOTE",
      "taskId": 465,
      "title": "Put the Spoon on the Left of the Pancakes",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 475,
      "durationSeconds": 1969.530163689948,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:51:13.254152+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-467-REMOTE",
      "taskId": 467,
      "title": "Put the Pickle inside the Mug",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 448,
      "durationSeconds": 1857.5779228065194,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:46:39.262270+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-468-REMOTE",
      "taskId": 468,
      "title": "Put the Spoon inside the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 497,
      "durationSeconds": 2060.7505081134823,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:51:09.248543+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-469-REMOTE",
      "taskId": 469,
      "title": "Put the Mug beside the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 535,
      "durationSeconds": 2218.3129212086783,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:09.285977+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-471-REMOTE",
      "taskId": 471,
      "title": "Put the Pickle beside the Spoon",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 463,
      "durationSeconds": 1919.773612186202,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:05.276035+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-472-REMOTE",
      "taskId": 472,
      "title": "Put the Sweet Potato into the Dustpan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 425,
      "durationSeconds": 1762.2111990910062,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:35.251165+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-473-REMOTE",
      "taskId": 473,
      "title": "Put the Green Cube into the Dustpan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 549,
      "durationSeconds": 2276.362231296382,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:46:35.228503+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-474-REMOTE",
      "taskId": 474,
      "title": "Put the Sweet Potato beside the Green Cube",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 505,
      "durationSeconds": 2093.921542449313,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-04-30T14:21:13.655313+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-475-REMOTE",
      "taskId": 475,
      "title": "Put the Ballet Flat beside the Dustpan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 650,
      "durationSeconds": 2695.146539786245,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:39.235282+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-476-REMOTE",
      "taskId": 476,
      "title": "Put Both Items inside the Dustpan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 348,
      "durationSeconds": 1442.9399936086356,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-04-26T01:59:09.280112+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-477-REMOTE",
      "taskId": 477,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 746,
      "durationSeconds": 3093.198951816213,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T07:31:19.303513+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-489-REMOTE",
      "taskId": 489,
      "title": "Put the Bowl beside the Triangle Notepad",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 685,
      "durationSeconds": 2840.269815005504,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T07:15:13.289745+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-490-REMOTE",
      "taskId": 490,
      "title": "Put the Banana in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 582,
      "durationSeconds": 2413.1927479316837,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:31.267649+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-491-REMOTE",
      "taskId": 491,
      "title": "Put the Green Cube Block in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 851,
      "durationSeconds": 3528.5687774739913,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:47:23.258224+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-492-REMOTE",
      "taskId": 492,
      "title": "Put the Bowl on the Triangle Notepad",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 533,
      "durationSeconds": 2210.020162624721,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:25.233031+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-493-REMOTE",
      "taskId": 493,
      "title": "Put the Green Cube Block on the Triangle Notepad",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 797,
      "durationSeconds": 3304.664295707134,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:47:17.232429+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-494-REMOTE",
      "taskId": 494,
      "title": "Put the Banana on the Triangle Notepad",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 635,
      "durationSeconds": 2632.950850406562,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:29.262922+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-495-REMOTE",
      "taskId": 495,
      "title": "Put the Knife beside the Water Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 684,
      "durationSeconds": 2836.1234357135254,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:11.245139+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-496-REMOTE",
      "taskId": 496,
      "title": "Put the Apple into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 884,
      "durationSeconds": 3665.399294109293,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:51:09.333825+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-498-REMOTE",
      "taskId": 498,
      "title": "Put the Knife into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 200,
      "durationSeconds": 829.2758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-26T12:28:49.340328+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-500-REMOTE",
      "taskId": 500,
      "title": "Put the Toast beside the Knife",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 695,
      "durationSeconds": 2881.7336079252923,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:11.273404+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-501-REMOTE",
      "taskId": 501,
      "title": "Put the Brush in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 310,
      "durationSeconds": 1285.3775805134399,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-09T12:34:49.536481+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-502-REMOTE",
      "taskId": 502,
      "title": "Put the Cup in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 404,
      "durationSeconds": 1675.1372339594507,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:47.273175+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-503-REMOTE",
      "taskId": 503,
      "title": "Put the Cup on the Top of the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 382,
      "durationSeconds": 1583.9168895359162,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:44:59.225854+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-504-REMOTE",
      "taskId": 504,
      "title": "Put the Brush on the Top of the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 404,
      "durationSeconds": 1675.1372339594507,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:43.273609+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-505-REMOTE",
      "taskId": 505,
      "title": "Put the Brush beside the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 393,
      "durationSeconds": 1629.5270617476833,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:41:51.253772+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-506-REMOTE",
      "taskId": 506,
      "title": "Put the Cup beside the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 684,
      "durationSeconds": 2836.1234357135254,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:21.282229+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-507-REMOTE",
      "taskId": 507,
      "title": "Put the Apple in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 490,
      "durationSeconds": 2031.7258530696306,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:23.346981+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-508-REMOTE",
      "taskId": 508,
      "title": "Put the Blue Block in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 417,
      "durationSeconds": 1729.0401647551755,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:27.264586+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-509-REMOTE",
      "taskId": 509,
      "title": "Put the Wooden Cube in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 441,
      "durationSeconds": 1828.5532677626675,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:35.285516+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-510-REMOTE",
      "taskId": 510,
      "title": "Put the Apple beside the Blue Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 428,
      "durationSeconds": 1774.6503369669426,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:39.248525+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-511-REMOTE",
      "taskId": 511,
      "title": "Put the Blue Block beside the Wooden Cube",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 240,
      "durationSeconds": 995.1310300749211,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:51.251936+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-512-REMOTE",
      "taskId": 512,
      "title": "Put the Wooden Cube beside the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 228,
      "durationSeconds": 945.374478571175,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:55.246044+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-513-REMOTE",
      "taskId": 513,
      "title": "Put the Orange on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 287,
      "durationSeconds": 1190.0108567979264,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:08:59.248237+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-514-REMOTE",
      "taskId": 514,
      "title": "Put the Tennis Ball on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 301,
      "durationSeconds": 1248.0601668856302,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:03.257899+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-515-REMOTE",
      "taskId": 515,
      "title": "Put the Mug on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 403,
      "durationSeconds": 1670.9908546674717,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-28T08:00:03.345441+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-516-REMOTE",
      "taskId": 516,
      "title": "Put the Orange beside the Mug",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 347,
      "durationSeconds": 1438.7936143166569,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:09:03.248189+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-517-REMOTE",
      "taskId": 517,
      "title": "Put the Tennis Ball beside the Mug",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 277,
      "durationSeconds": 1148.547063878138,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:48:39.219085+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-518-REMOTE",
      "taskId": 518,
      "title": "Put the Tennis Ball beside the Orange",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 343,
      "durationSeconds": 1422.2080971487414,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:45:07.221363+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-519-REMOTE",
      "taskId": 519,
      "title": "Put the Apple beside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1177,
      "durationSeconds": 4880.288426659093,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-11T16:50:45.233619+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-520-REMOTE",
      "taskId": 520,
      "title": "Put the Apple beside the Wooden Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1169,
      "durationSeconds": 4847.117392323262,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T16:23:37.235931+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-521-REMOTE",
      "taskId": 521,
      "title": "Put the Cup beside the Wooden Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1192,
      "durationSeconds": 4942.484116038775,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T00:22:01.249755+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-522-REMOTE",
      "taskId": 522,
      "title": "Put the Cup on the Wooden Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 969,
      "durationSeconds": 4017.841533927494,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:55:09.228360+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-523-REMOTE",
      "taskId": 523,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 613,
      "durationSeconds": 2541.730505983028,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:10:11.277510+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-524-REMOTE",
      "taskId": 524,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 972,
      "durationSeconds": 4030.280671803431,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:46:35.292337+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-525-REMOTE",
      "taskId": 525,
      "title": "Put the Green Cup on the Blue Rectangular Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 319,
      "durationSeconds": 1322.6949941412493,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-29T04:48:41.271718+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-526-REMOTE",
      "taskId": 526,
      "title": "Put the Green Cup on the Red Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 395,
      "durationSeconds": 1637.819820331641,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:09:13.258351+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-527-REMOTE",
      "taskId": 527,
      "title": "Put the Green Cup beside the Blue Rectangular Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 430,
      "durationSeconds": 1782.9430955509004,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T16:26:19.280985+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-528-REMOTE",
      "taskId": 528,
      "title": "Put the Green Cup beside the Red Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1280,
      "durationSeconds": 5307.365493732913,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:16:05.418978+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-529-REMOTE",
      "taskId": 529,
      "title": "Put the Red Cube Block beside the Blue Rectangular Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1281,
      "durationSeconds": 5311.511873024891,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:16:01.262891+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-530-REMOTE",
      "taskId": 530,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1301,
      "durationSeconds": 5394.439458864468,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:15:57.251351+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-531-REMOTE",
      "taskId": 531,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1281,
      "durationSeconds": 5311.511873024891,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:15:55.230679+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-532-REMOTE",
      "taskId": 532,
      "title": "Rearrange Three Items 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1301,
      "durationSeconds": 5394.439458864468,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:15:51.234395+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-533-REMOTE",
      "taskId": 533,
      "title": "Rearrange Three Items 4",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1267,
      "durationSeconds": 5253.462562937188,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:09:53.259333+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-534-REMOTE",
      "taskId": 534,
      "title": "Rearrange Three Items 5",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1371,
      "durationSeconds": 5684.686009302987,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:15:45.282756+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-535-REMOTE",
      "taskId": 535,
      "title": "Rearrange Three Items 6",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1268,
      "durationSeconds": 5257.608942229167,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:15:41.248851+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-536-REMOTE",
      "taskId": 536,
      "title": "Rearrange Three Items 7",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1317,
      "durationSeconds": 5460.78152753613,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T06:15:33.326109+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-550-REMOTE",
      "taskId": 550,
      "title": "Put the Red Cube Block on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2508,
      "durationSeconds": 10399.119264282926,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T15:35:49.645853+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-551-REMOTE",
      "taskId": 551,
      "title": "Put the Cup on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2148,
      "durationSeconds": 8906.422719170545,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T15:36:15.537111+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-552-REMOTE",
      "taskId": 552,
      "title": "Put the Red Cube Block inside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1225,
      "durationSeconds": 5079.314632674076,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:45:55.291851+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-553-REMOTE",
      "taskId": 553,
      "title": "Put the Cup beside the Red Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2148,
      "durationSeconds": 8906.422719170545,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:57:41.230192+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-554-REMOTE",
      "taskId": 554,
      "title": "Put the Cup beside the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2366,
      "durationSeconds": 9810.333404821931,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:57:37.209168+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-555-REMOTE",
      "taskId": 555,
      "title": "Put the Red Cube Block beside the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1777,
      "durationSeconds": 7368.116001846395,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:11:43.211304+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-556-REMOTE",
      "taskId": 556,
      "title": "Rearrange Three Objects",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 963,
      "durationSeconds": 3992.963258175621,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:46:01.202193+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-557-REMOTE",
      "taskId": 557,
      "title": "Rearrange Three Objects 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 869,
      "durationSeconds": 3603.20360472961,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:10:17.269851+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-637-REMOTE",
      "taskId": 637,
      "title": "Put the Apple in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3842,
      "durationSeconds": 15930.389239782695,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:57:33.210414+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-638-REMOTE",
      "taskId": 638,
      "title": "Put the Cup on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1338,
      "durationSeconds": 5547.855492667685,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T15:36:29.465742+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-639-REMOTE",
      "taskId": 639,
      "title": "Put the Apple beside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1195,
      "durationSeconds": 4954.9232539147115,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T02:57:35.219542+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-640-REMOTE",
      "taskId": 640,
      "title": "Put the Apple on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1181,
      "durationSeconds": 4896.873943827008,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:01:27.272600+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-641-REMOTE",
      "taskId": 641,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1134,
      "durationSeconds": 4701.994117104003,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:10:19.242674+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-642-REMOTE",
      "taskId": 642,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1218,
      "durationSeconds": 5050.289977630225,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:51:33.217886+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-649-REMOTE",
      "taskId": 649,
      "title": "Insert the Screwdriver into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 475,
      "durationSeconds": 1969.530163689948,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T03:00:53.208563+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-650-REMOTE",
      "taskId": 650,
      "title": "Put the Measure Tape beside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1198,
      "durationSeconds": 4967.362391790648,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:06:31.241966+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-651-REMOTE",
      "taskId": 651,
      "title": "Put the Screwdriver beside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 780,
      "durationSeconds": 3234.1758477434937,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T03:00:41.225545+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-652-REMOTE",
      "taskId": 652,
      "title": "Put the Cup beside the Knife",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1027,
      "durationSeconds": 4258.331532862267,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:34:13.350847+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-653-REMOTE",
      "taskId": 653,
      "title": "Separate the Knife from the Screwdriver",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 787,
      "durationSeconds": 3263.2005027873456,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-04T08:12:51.263165+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-654-REMOTE",
      "taskId": 654,
      "title": "Separate the Cup from the Knife",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1217,
      "durationSeconds": 5046.143598338246,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:42:15.232182+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-661-REMOTE",
      "taskId": 661,
      "title": "Put the Perfume Bottle on the Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 839,
      "durationSeconds": 3478.812225970245,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T02:31:39.226694+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-662-REMOTE",
      "taskId": 662,
      "title": "Put the Lip Product on the Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1216,
      "durationSeconds": 5041.997219046267,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:59:41.221450+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-663-REMOTE",
      "taskId": 663,
      "title": "Put the Lip Product beside the Brush",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1211,
      "durationSeconds": 5021.265322586373,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T04:49:03.250285+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-664-REMOTE",
      "taskId": 664,
      "title": "Put the Lip Product beside the Perfume Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 637,
      "durationSeconds": 2641.24360899052,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T03:00:13.253381+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-665-REMOTE",
      "taskId": 665,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 708,
      "durationSeconds": 2935.636538721017,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:51:37.293859+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-666-REMOTE",
      "taskId": 666,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1605,
      "durationSeconds": 6654.938763626035,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:58:45.219522+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-667-REMOTE",
      "taskId": 667,
      "title": "Insert the Marker Pen into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1656,
      "durationSeconds": 6866.404107516956,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:44:33.246577+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-668-REMOTE",
      "taskId": 668,
      "title": "Put the Computer Mouse on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2064,
      "durationSeconds": 8558.126858644322,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:57:51.205381+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-669-REMOTE",
      "taskId": 669,
      "title": "Put the Marker Pen on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1986,
      "durationSeconds": 8234.709273869972,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:57:45.211513+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-670-REMOTE",
      "taskId": 670,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1213,
      "durationSeconds": 5029.55808117033,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:59:55.326074+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-671-REMOTE",
      "taskId": 671,
      "title": "Put the Cup on the Notebook with the Pen inside",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1534,
      "durationSeconds": 6360.545833895538,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T02:55:59.220073+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-672-REMOTE",
      "taskId": 672,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1609,
      "durationSeconds": 6671.52428079395,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T02:55:53.213741+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-674-REMOTE",
      "taskId": 674,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1212,
      "durationSeconds": 5025.411701878352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:51:39.258431+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-675-REMOTE",
      "taskId": 675,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1210,
      "durationSeconds": 5017.118943294394,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:00:11.208167+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-676-REMOTE",
      "taskId": 676,
      "title": "Rearrange Three Items 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1220,
      "durationSeconds": 5058.582736214183,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:00:25.242344+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-677-REMOTE",
      "taskId": 677,
      "title": "Rearrange Three Items 4",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1226,
      "durationSeconds": 5083.461011966056,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:00:41.231614+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-678-REMOTE",
      "taskId": 678,
      "title": "Rotate the Mug",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1216,
      "durationSeconds": 5041.997219046267,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:09:49.239678+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-679-REMOTE",
      "taskId": 679,
      "title": "Rotate the Mug 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1219,
      "durationSeconds": 5054.436356922203,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:10:03.305863+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-680-REMOTE",
      "taskId": 680,
      "title": "Put the Scented Candle on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 999,
      "durationSeconds": 4142.232912686859,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:37:47.201859+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-681-REMOTE",
      "taskId": 681,
      "title": "Put the Teacup on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1054,
      "durationSeconds": 4370.283773745696,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T02:31:33.233966+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-682-REMOTE",
      "taskId": 682,
      "title": "Put Both Items on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 598,
      "durationSeconds": 2479.534816603345,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T03:00:01.211971+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-683-REMOTE",
      "taskId": 683,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:59:25.291307+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-684-REMOTE",
      "taskId": 684,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1312,
      "durationSeconds": 5440.0496310762355,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T03:01:15.221518+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-685-REMOTE",
      "taskId": 685,
      "title": "Rearrange Three Items 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1475,
      "durationSeconds": 6115.909455668786,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-10T02:59:55.238597+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-694-REMOTE",
      "taskId": 694,
      "title": "Put the Computer Mouse on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1627,
      "durationSeconds": 6746.159108049569,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:37:53.196290+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-695-REMOTE",
      "taskId": 695,
      "title": "Put the Cup on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1390,
      "durationSeconds": 5763.467215850585,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T09:14:13.213855+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-696-REMOTE",
      "taskId": 696,
      "title": "Put the Computer Mouse on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1293,
      "durationSeconds": 5361.268424528637,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:38:01.207023+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-697-REMOTE",
      "taskId": 697,
      "title": "Put the Cup on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1304,
      "durationSeconds": 5406.878596740405,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T10:53:13.249327+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-698-REMOTE",
      "taskId": 698,
      "title": "Put Both Items on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1168,
      "durationSeconds": 4842.971013031282,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:17:53.186031+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-699-REMOTE",
      "taskId": 699,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1233,
      "durationSeconds": 5112.485667009907,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:38:13.305818+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-706-REMOTE",
      "taskId": 706,
      "title": "Put the Soap on the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1399,
      "durationSeconds": 5800.784629478394,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:38:09.214887+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-707-REMOTE",
      "taskId": 707,
      "title": "Rearrange Your Bathroom",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 932,
      "durationSeconds": 3864.425500124277,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:38:17.252089+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-708-REMOTE",
      "taskId": 708,
      "title": "Rearrange Your Bathroom 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1138,
      "durationSeconds": 4718.579634271918,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:38:19.218531+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-709-REMOTE",
      "taskId": 709,
      "title": "Rearrange Your Bathroom 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:11:07.223996+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-710-REMOTE",
      "taskId": 710,
      "title": "Rearrange Your Bathroom 4",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1090,
      "durationSeconds": 4519.553428256933,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:11:13.186158+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-711-REMOTE",
      "taskId": 711,
      "title": "Rearrange Your Bathroom 5",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1091,
      "durationSeconds": 4523.699807548912,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:11:25.193219+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-712-REMOTE",
      "taskId": 712,
      "title": "Transfer the Apple to the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1983,
      "durationSeconds": 8222.270135994037,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-17T09:23:45.190986+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-713-REMOTE",
      "taskId": 713,
      "title": "Transfer the Banana to the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2645,
      "durationSeconds": 10967.173227284027,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:41.210527+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-714-REMOTE",
      "taskId": 714,
      "title": "Transfer Both Items to the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1166,
      "durationSeconds": 4834.678254447325,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:29.240682+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-715-REMOTE",
      "taskId": 715,
      "title": "Rearrange Your Fruits",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1138,
      "durationSeconds": 4718.579634271918,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:19.205860+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-716-REMOTE",
      "taskId": 716,
      "title": "Rearrange Your Fruits 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1264,
      "durationSeconds": 5241.023425061251,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:13.196985+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-717-REMOTE",
      "taskId": 717,
      "title": "Rearrange Your Fruits 3",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1171,
      "durationSeconds": 4855.41015090722,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:07.210277+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-718-REMOTE",
      "taskId": 718,
      "title": "Transfer the Cup to the Magazine",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3431,
      "durationSeconds": 14226.227350779393,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:35.213855+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-719-REMOTE",
      "taskId": 719,
      "title": "Transfer the Eyeglasses Case to the Magazine",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2847,
      "durationSeconds": 11804.741844263752,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:47.213860+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-720-REMOTE",
      "taskId": 720,
      "title": "Transfer the Toy Figurine to the Magazine",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3433,
      "durationSeconds": 14234.520109363351,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-17T09:23:55.167240+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-721-REMOTE",
      "taskId": 721,
      "title": "Transfer Both Items to the Magazine",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1430,
      "durationSeconds": 5929.322387529738,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T09:50:25.215499+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-722-REMOTE",
      "taskId": 722,
      "title": "Transfer Both Items to the Magazine 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1695,
      "durationSeconds": 7028.11289990413,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:13.242093+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-723-REMOTE",
      "taskId": 723,
      "title": "Rearrange Your Coffee Table",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2069,
      "durationSeconds": 8578.858755104216,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:09:19.212805+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-725-REMOTE",
      "taskId": 725,
      "title": "Transfer the Apple to the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1798,
      "durationSeconds": 7455.1899669779505,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:21.208421+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-726-REMOTE",
      "taskId": 726,
      "title": "Put the Spoon beside the Apple",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1739,
      "durationSeconds": 7210.5535887512,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:27.238962+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-727-REMOTE",
      "taskId": 727,
      "title": "Transfer the Cookie to the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1900,
      "durationSeconds": 7878.120654759792,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:31.208750+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-728-REMOTE",
      "taskId": 728,
      "title": "Transfer Both Items to the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1542,
      "durationSeconds": 6393.716868231369,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:37.213715+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-729-REMOTE",
      "taskId": 729,
      "title": "Separate the Spoon from the Apple",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2122,
      "durationSeconds": 8798.616857579094,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:47:13.273691+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-730-REMOTE",
      "taskId": 730,
      "title": "Separate the Cookie from the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2324,
      "durationSeconds": 9636.185474558819,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:49.213856+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-731-REMOTE",
      "taskId": 731,
      "title": "Transfer the Egg to the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1857,
      "durationSeconds": 7699.826345204702,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:58:59.271650+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-732-REMOTE",
      "taskId": 732,
      "title": "Transfer the Green Pepper to the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2677,
      "durationSeconds": 11099.857364627349,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:47:13.231063+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-733-REMOTE",
      "taskId": 733,
      "title": "Put the Green Pepper beside the Spatula",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1227,
      "durationSeconds": 5087.607391258034,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:19:49.196683+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-734-REMOTE",
      "taskId": 734,
      "title": "Put the Green Pepper beside the Egg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1209,
      "durationSeconds": 5012.972564002415,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T07:39:31.653210+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-735-REMOTE",
      "taskId": 735,
      "title": "Put the Spatula beside the Egg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1233,
      "durationSeconds": 5112.485667009907,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:13.278781+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-736-REMOTE",
      "taskId": 736,
      "title": "Rotate the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1270,
      "durationSeconds": 5265.901700813124,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:17.235876+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-737-REMOTE",
      "taskId": 737,
      "title": "Put the Screwdriver beside the Hammer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1255,
      "durationSeconds": 5203.706011433442,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:09.213863+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-738-REMOTE",
      "taskId": 738,
      "title": "Put the Hammer beside the Wrench",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1327,
      "durationSeconds": 5502.245320455918,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:05.365998+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-739-REMOTE",
      "taskId": 739,
      "title": "Put the Screwdriver beside the Wrench",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1274,
      "durationSeconds": 5282.48721798104,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:19:55.182990+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-740-REMOTE",
      "taskId": 740,
      "title": "Rotate the Hammer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1260,
      "durationSeconds": 5224.437907893336,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T06:41:09.307822+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-741-REMOTE",
      "taskId": 741,
      "title": "Rotate the Hammer 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1272,
      "durationSeconds": 5274.194459397082,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:19:59.198515+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-742-REMOTE",
      "taskId": 742,
      "title": "Rotate the Screwdriver",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1230,
      "durationSeconds": 5100.046529133971,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:47:15.165857+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-743-REMOTE",
      "taskId": 743,
      "title": "Transfer the Cup to the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1339,
      "durationSeconds": 5552.001871959664,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T12:28:27.223006+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-744-REMOTE",
      "taskId": 744,
      "title": "Transfer the Pen to the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1159,
      "durationSeconds": 4805.653599403473,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:27.261231+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-745-REMOTE",
      "taskId": 745,
      "title": "Transfer the Scissors to the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1212,
      "durationSeconds": 5025.411701878352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:29.205571+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-746-REMOTE",
      "taskId": 746,
      "title": "Put the Cup beside the Scissors",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1447,
      "durationSeconds": 5999.810835493378,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-09T04:40:37.180434+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-747-REMOTE",
      "taskId": 747,
      "title": "Put the Cup beside the Pen",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1276,
      "durationSeconds": 5290.779976564997,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:33.194201+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-748-REMOTE",
      "taskId": 748,
      "title": "Rotate the Scissors",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1146,
      "durationSeconds": 4751.750668607749,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:43.195849+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-749-REMOTE",
      "taskId": 749,
      "title": "Put the Green Pepper beside the Egg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1236,
      "durationSeconds": 5124.9248048858435,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:33.194737+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-750-REMOTE",
      "taskId": 750,
      "title": "Rotate the Toy Car",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1365,
      "durationSeconds": 5659.807733551114,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:47.202204+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-751-REMOTE",
      "taskId": 751,
      "title": "Rotate the Toy Car 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1308,
      "durationSeconds": 5423.4641139083205,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:11:03.204549+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-752-REMOTE",
      "taskId": 752,
      "title": "Put the Sphere beside the Toy Car",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1439,
      "durationSeconds": 5966.6398011575475,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:57.243776+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-753-REMOTE",
      "taskId": 753,
      "title": "Put the Toy Car beside the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1255,
      "durationSeconds": 5203.706011433442,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:27.220174+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-754-REMOTE",
      "taskId": 754,
      "title": "Separate the Toy Car from the Sphere",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1307,
      "durationSeconds": 5419.317734616341,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:52:53.201396+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-755-REMOTE",
      "taskId": 755,
      "title": "Separate the Toy Car from the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1218,
      "durationSeconds": 5050.289977630225,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:59.213414+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-756-REMOTE",
      "taskId": 756,
      "title": "Rotate the Phone",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:07.203277+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-757-REMOTE",
      "taskId": 757,
      "title": "Rotate the Phone 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1165,
      "durationSeconds": 4830.531875155346,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:13.250712+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-758-REMOTE",
      "taskId": 758,
      "title": "Put the Earbud Case beside the Cable",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1037,
      "durationSeconds": 4299.795325782055,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:53.213479+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-759-REMOTE",
      "taskId": 759,
      "title": "Put the Charger on the Phone",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1163,
      "durationSeconds": 4822.239116571389,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:49.217502+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-760-REMOTE",
      "taskId": 760,
      "title": "Put the Earbud Case on the Phone",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1019,
      "durationSeconds": 4225.160498526436,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:20:57.204838+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-761-REMOTE",
      "taskId": 761,
      "title": "Put the Charger beside the Cable",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1154,
      "durationSeconds": 4784.9217029435795,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:53.248239+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-762-REMOTE",
      "taskId": 762,
      "title": "Stack the Apple on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-07T16:55:17.574941+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-763-REMOTE",
      "taskId": 763,
      "title": "Put the Apple in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 984,
      "durationSeconds": 4080.0372233071766,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T07:39:31.653210+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-764-REMOTE",
      "taskId": 764,
      "title": "Stack the Cup on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1128,
      "durationSeconds": 4677.115841352129,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T22:34:23.191935+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-765-REMOTE",
      "taskId": 765,
      "title": "Put the Cup beside the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1097,
      "durationSeconds": 4548.578083300786,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:46:37.205370+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-768-REMOTE",
      "taskId": 768,
      "title": "Put the Lipstick on the Compact Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1014,
      "durationSeconds": 4204.428602066541,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:21:03.243042+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-769-REMOTE",
      "taskId": 769,
      "title": "Put the Lipstick beside the Compact Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:06:01.228919+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-770-REMOTE",
      "taskId": 770,
      "title": "Put the Perfume on the Compact Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 670,
      "durationSeconds": 2778.0741256258216,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:52:19.237105+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-771-REMOTE",
      "taskId": 771,
      "title": "Put the Perfume beside the Compact Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:05:59.248531+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-772-REMOTE",
      "taskId": 772,
      "title": "Separate the Perfume from the Compact Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 617,
      "durationSeconds": 2558.3160231509432,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:52:29.212437+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-773-REMOTE",
      "taskId": 773,
      "title": "Separate the Lipstick from the Compact Powder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 556,
      "durationSeconds": 2305.386886340234,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:52:33.239476+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-774-REMOTE",
      "taskId": 774,
      "title": "Put the Pill Bottle on the Medicine Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1031,
      "durationSeconds": 4274.917050030182,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-05T01:46:11.295638+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-775-REMOTE",
      "taskId": 775,
      "title": "Put the Cup on the Medicine Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1240,
      "durationSeconds": 5141.510322053759,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T15:04:25.226754+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-776-REMOTE",
      "taskId": 776,
      "title": "Put the Cup beside the Pill Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2171,
      "durationSeconds": 9001.789442886058,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T06:01:05.230513+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-777-REMOTE",
      "taskId": 777,
      "title": "Put the Pill Bottle beside the Thermometer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1443,
      "durationSeconds": 5983.225318325463,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-13T12:11:17.318893+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-778-REMOTE",
      "taskId": 778,
      "title": "Put the Cup beside the Thermometer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1235,
      "durationSeconds": 5120.778425593865,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:49:51.207837+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-779-REMOTE",
      "taskId": 779,
      "title": "Put the Cup beside the Medicine Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2262,
      "durationSeconds": 9379.109958456133,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:50:07.230910+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-786-REMOTE",
      "taskId": 786,
      "title": "Put the Croissant on the Butter Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1351,
      "durationSeconds": 5601.7584234634105,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:43.188164+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-787-REMOTE",
      "taskId": 787,
      "title": "Put the Jam on the Butter Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1258,
      "durationSeconds": 5216.145149309378,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:55.200804+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-788-REMOTE",
      "taskId": 788,
      "title": "Put the Cup on the Butter Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1942,
      "durationSeconds": 8052.268585022904,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T06:47:43.250511+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-789-REMOTE",
      "taskId": 789,
      "title": "Put the Croissant beside the Jam",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1416,
      "durationSeconds": 5871.273077442034,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:57.199808+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-790-REMOTE",
      "taskId": 790,
      "title": "Put the Croissant near the Butter Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2008,
      "durationSeconds": 8325.929618293507,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:39.205042+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-791-REMOTE",
      "taskId": 791,
      "title": "Rotate the Croissant",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2564,
      "durationSeconds": 10631.31650463374,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:14:01.196955+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-792-REMOTE",
      "taskId": 792,
      "title": "Put the Cup on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2051,
      "durationSeconds": 8504.223927848598,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T14:58:01.261923+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-793-REMOTE",
      "taskId": 793,
      "title": "Put the Bottle on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1277,
      "durationSeconds": 5294.926355856976,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:23.185974+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-794-REMOTE",
      "taskId": 794,
      "title": "Put the Cup on the Rectangular Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1784,
      "durationSeconds": 7397.140656890247,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T14:57:57.261910+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-795-REMOTE",
      "taskId": 795,
      "title": "Put the Bottle on the Rectangular Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:35.203299+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-796-REMOTE",
      "taskId": 796,
      "title": "Put the Cup beside the Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1965,
      "durationSeconds": 8147.635308738417,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:49:09.295610+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-797-REMOTE",
      "taskId": 797,
      "title": "Put the Cup beside the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1531,
      "durationSeconds": 6348.106696019601,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:13.196792+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-799-REMOTE",
      "taskId": 799,
      "title": "Put the Tape on the Gift Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1267,
      "durationSeconds": 5253.462562937188,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:13:31.224240+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-805-REMOTE",
      "taskId": 805,
      "title": "Put the Apple on the Napkin Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 684,
      "durationSeconds": 2836.1234357135254,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T05:50:49.277007+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-811-REMOTE",
      "taskId": 811,
      "title": "Reach target pose",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1860,
      "durationSeconds": 7712.265483080639,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T15:15:59.244914+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-812-REMOTE",
      "taskId": 812,
      "title": "Align gripper to object",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1793,
      "durationSeconds": 7434.458070518057,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:59.222057+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-818-REMOTE",
      "taskId": 818,
      "title": "Put the Shot Glass on the Coaster",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3333,
      "durationSeconds": 13819.882180165467,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:14:27.233968+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-821-REMOTE",
      "taskId": 821,
      "title": "Separate the Shot Glass from the Radio",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-09T18:19:35.247397+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-828-REMOTE",
      "taskId": 828,
      "title": "Put the Toy Figurine into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2585,
      "durationSeconds": 10718.390469765296,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:14:23.192893+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-829-REMOTE",
      "taskId": 829,
      "title": "Put the Toy Car in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 760,
      "durationSeconds": 3151.248261903917,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-11T12:21:35.300684+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-830-REMOTE",
      "taskId": 830,
      "title": "Place the Toy Figurine on the Left Side of the Toy Car",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 599,
      "durationSeconds": 2483.681195895324,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-08T10:04:29.316057+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-832-REMOTE",
      "taskId": 832,
      "title": "Rotate the Toy Car",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 716,
      "durationSeconds": 2968.807573056848,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:14:53.204904+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-833-REMOTE",
      "taskId": 833,
      "title": "Rotate the Toy Car 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 669,
      "durationSeconds": 2773.9277463338426,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:14:55.214185+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-837-REMOTE",
      "taskId": 837,
      "title": "Rearrange Your Bathroom 4",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-05-10T06:32:49.250719+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-838-REMOTE",
      "taskId": 838,
      "title": "Separate the Sponge from the Detergent",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 612,
      "durationSeconds": 2537.584126691049,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-13T01:17:51.267972+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-839-REMOTE",
      "taskId": 839,
      "title": "Separate the Brush from the Sponge",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 762,
      "durationSeconds": 3159.5410204878744,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:15:01.216146+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-845-REMOTE",
      "taskId": 845,
      "title": "Rotate the Carrot 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 735,
      "durationSeconds": 3047.588779604446,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-11T05:35:33.197852+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-856-REMOTE",
      "taskId": 856,
      "title": "Put the Toy Ball beside the Chew Toy",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 884,
      "durationSeconds": 3665.399294109293,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T05:47:39.252633+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-868-REMOTE",
      "taskId": 868,
      "title": "Pick single rigid object",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:28:03.256768+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-869-REMOTE",
      "taskId": 869,
      "title": "Top-down grasp",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1210,
      "durationSeconds": 5017.118943294394,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T04:59:35.222788+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-870-REMOTE",
      "taskId": 870,
      "title": "Side grasp",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:43:59.202239+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-874-REMOTE",
      "taskId": 874,
      "title": "Put the Hammer on the Toolbox",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 903,
      "durationSeconds": 3744.1805006568907,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:15:59.194375+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-890-REMOTE",
      "taskId": 890,
      "title": "Put the Soap on the Left Side of the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 892,
      "durationSeconds": 3698.5703284451233,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:19:09.281866+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-898-REMOTE",
      "taskId": 898,
      "title": "Put the Cup on the Left Side of the Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1043,
      "durationSeconds": 4324.673601533928,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:15:17.268179+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-919-REMOTE",
      "taskId": 919,
      "title": "Put the Rolling Pin into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 957,
      "durationSeconds": 3968.084982423748,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:18:51.211976+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-925-REMOTE",
      "taskId": 925,
      "title": "Put the Tea Pot on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1053,
      "durationSeconds": 4366.137394453716,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:09:55.328851+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-926-REMOTE",
      "taskId": 926,
      "title": "Put the Tea Cup on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 952,
      "durationSeconds": 3947.353085963854,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:01.188611+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-929-REMOTE",
      "taskId": 929,
      "title": "Put the Tea Cup on the Left Side of the Tea Pot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1081,
      "durationSeconds": 4482.236014629124,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T08:10:05.213896+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-952-REMOTE",
      "taskId": 952,
      "title": "Put both the Muffin and the Cup on the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:34:25.264484+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-960-REMOTE",
      "taskId": 960,
      "title": "Put the Toy Car in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T13:50:49.296190+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-961-REMOTE",
      "taskId": 961,
      "title": "Put the Toy Figurine in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1192,
      "durationSeconds": 4942.484116038775,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:57:19.198692+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-969-REMOTE",
      "taskId": 969,
      "title": "Put the Camera on the Right Side of the Eyeglasses Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1195,
      "durationSeconds": 4954.9232539147115,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:19:57.220901+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-971-REMOTE",
      "taskId": 971,
      "title": "Rotate the Eyeglasses Case 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:34:39.240953+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-972-REMOTE",
      "taskId": 972,
      "title": "Put the Tomato into the Pan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1197,
      "durationSeconds": 4963.216012498669,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:46:57.240873+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-987-REMOTE",
      "taskId": 987,
      "title": "Insert the Screwdriver into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1192,
      "durationSeconds": 4942.484116038775,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:46:09.233295+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-991-REMOTE",
      "taskId": 991,
      "title": "Put the Rose into the Pot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:37:27.241854+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1004-REMOTE",
      "taskId": 1004,
      "title": "Put the Microphone on the Cassette",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T10:56:15.191279+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1006-REMOTE",
      "taskId": 1006,
      "title": "Put the Microphone beside the Headphone",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1112,
      "durationSeconds": 4610.773772680468,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:57:15.233388+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1014-REMOTE",
      "taskId": 1014,
      "title": "Put the Pen on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1208,
      "durationSeconds": 5008.826184710437,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:56:59.235399+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1016-REMOTE",
      "taskId": 1016,
      "title": "Put the Pen on the Keyboard",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:57:29.248538+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1035-REMOTE",
      "taskId": 1035,
      "title": "Put the Pen into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T15:29:55.556419+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1038-REMOTE",
      "taskId": 1038,
      "title": "Put the Donut on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:51:13.213279+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1041-REMOTE",
      "taskId": 1041,
      "title": "Put the Donut beside the Muffin",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:31:39.266403+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1052-REMOTE",
      "taskId": 1052,
      "title": "Put the Dice on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:58:09.238552+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1054-REMOTE",
      "taskId": 1054,
      "title": "Put Both Items into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T10:55:33.215875+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1056-REMOTE",
      "taskId": 1056,
      "title": "Put the Kettle on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:31:09.224917+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1057-REMOTE",
      "taskId": 1057,
      "title": "Put the Grinder on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T23:31:15.256535+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1063-REMOTE",
      "taskId": 1063,
      "title": "Put the Dog Ball into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:57:47.227264+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1078-REMOTE",
      "taskId": 1078,
      "title": "Put the Cup beside the Liquor",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:01:01.225125+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1082-REMOTE",
      "taskId": 1082,
      "title": "Put the Bowl on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:57:15.230009+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1086-REMOTE",
      "taskId": 1086,
      "title": "Put the Medicine Bottle on the Pill Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:55:15.209854+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1087-REMOTE",
      "taskId": 1087,
      "title": "Put the Tablet Tube on the Pill Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T13:53:29.307678+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1089-REMOTE",
      "taskId": 1089,
      "title": "Put the Tablet Tube on the Medicine Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T13:53:23.359898+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1090-REMOTE",
      "taskId": 1090,
      "title": "Put the Medicine Bottle beside the Tablet Tube",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T22:32:21.295482+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1091-REMOTE",
      "taskId": 1091,
      "title": "Pick up the Medicine Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:33:05.204075+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1092-REMOTE",
      "taskId": 1092,
      "title": "Put the Butter Block on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1198,
      "durationSeconds": 4967.362391790648,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:47:05.258361+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1093-REMOTE",
      "taskId": 1093,
      "title": "Put the Croissant on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:46:51.214100+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1094-REMOTE",
      "taskId": 1094,
      "title": "Put the Fork on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:46:47.234917+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1095-REMOTE",
      "taskId": 1095,
      "title": "Put the Croissant beside the Fork",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1101,
      "durationSeconds": 4565.163600468701,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:04:03.217078+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1096-REMOTE",
      "taskId": 1096,
      "title": "Rotate the Fork",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:11:29.229565+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1097-REMOTE",
      "taskId": 1097,
      "title": "Rotate the Croissant",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1192,
      "durationSeconds": 4942.484116038775,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:11:13.205636+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1104-REMOTE",
      "taskId": 1104,
      "title": "Touch object lightly",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 994,
      "durationSeconds": 4121.501016226965,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T10:55:11.227394+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1105-REMOTE",
      "taskId": 1105,
      "title": "Pull object closer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1212,
      "durationSeconds": 5025.411701878352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:48:11.253601+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1106-REMOTE",
      "taskId": 1106,
      "title": "Controlled small displacement",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1006,
      "durationSeconds": 4171.257567730711,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T13:42:35.284145+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1108-REMOTE",
      "taskId": 1108,
      "title": "Pack tightly",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T22:35:37.330825+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1109-REMOTE",
      "taskId": 1109,
      "title": "Precision pinch grasp",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-13T10:22:07.238541+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1112-REMOTE",
      "taskId": 1112,
      "title": "Regrasp in air",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1208,
      "durationSeconds": 5008.826184710437,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:47:19.294196+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1113-REMOTE",
      "taskId": 1113,
      "title": "Sort by size",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 683,
      "durationSeconds": 2831.9770564215464,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T04:46:37.196461+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1114-REMOTE",
      "taskId": 1114,
      "title": "Pick one of many similar objects",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1209,
      "durationSeconds": 5012.972564002415,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:47:59.233396+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1137-REMOTE",
      "taskId": 1137,
      "title": "Rearrange Your Table - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:59:23.199329+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1138-REMOTE",
      "taskId": 1138,
      "title": "Rearrange Your Table 2 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:48:11.241585+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1142-REMOTE",
      "taskId": 1142,
      "title": "Rearrange Your Table 6 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T13:55:05.241870+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1143-REMOTE",
      "taskId": 1143,
      "title": "Lift the Plate to the Air - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T13:55:31.247052+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1144-REMOTE",
      "taskId": 1144,
      "title": "Lift the Diamond to the Air - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T05:09:01.221883+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1145-REMOTE",
      "taskId": 1145,
      "title": "Lift the Bracelet to the Air - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:54:55.192643+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1146-REMOTE",
      "taskId": 1146,
      "title": "Put the Bracelet on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1198,
      "durationSeconds": 4967.362391790648,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-16T07:21:21.210850+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1147-REMOTE",
      "taskId": 1147,
      "title": "Put the Diamond on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 278,
      "durationSeconds": 1152.693443170117,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:18:51.237323+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1148-REMOTE",
      "taskId": 1148,
      "title": "Reach around obstacle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 775,
      "durationSeconds": 3213.4439512835993,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-15T13:42:29.333165+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1153-REMOTE",
      "taskId": 1153,
      "title": "Squeegee/wipe push",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1128,
      "durationSeconds": 4677.115841352129,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:01:47.220137+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1158-REMOTE",
      "taskId": 1158,
      "title": "Peg into hole",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1178,
      "durationSeconds": 4884.434805951071,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:01:37.209414+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1164-REMOTE",
      "taskId": 1164,
      "title": "Insert utensil into holder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:58:49.195128+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1165-REMOTE",
      "taskId": 1165,
      "title": "Pick up the Basket - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T13:55:25.259562+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1166-REMOTE",
      "taskId": 1166,
      "title": "Pick up the Compact Powder - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:52:57.205858+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1167-REMOTE",
      "taskId": 1167,
      "title": "Pick up the Lipstick - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-12T07:50:43.293088+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1168-REMOTE",
      "taskId": 1168,
      "title": "Put the Lipstick into the Basket - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 370,
      "durationSeconds": 1534.16033803217,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:35:47.012383+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1169-REMOTE",
      "taskId": 1169,
      "title": "Put the Compact Powder into the Basket - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 181,
      "durationSeconds": 750.4946518481697,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:30:58.906554+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1170-REMOTE",
      "taskId": 1170,
      "title": "Pick up the Onion - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1195,
      "durationSeconds": 4954.9232539147115,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:04:25.842661+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1171-REMOTE",
      "taskId": 1171,
      "title": "Pick up the Eggplant - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-17T16:30:17.287348+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1172-REMOTE",
      "taskId": 1172,
      "title": "Pick up the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-14T05:09:05.226042+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1173-REMOTE",
      "taskId": 1173,
      "title": "Put the Onion into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 184,
      "durationSeconds": 762.9337897241062,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:34:57.283364+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1174-REMOTE",
      "taskId": 1174,
      "title": "Put the Eggplant into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 208,
      "durationSeconds": 862.4468927315983,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T03:44:25.270630+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1175-REMOTE",
      "taskId": 1175,
      "title": "Put the Glasses Case on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:52:35.210113+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1176-REMOTE",
      "taskId": 1176,
      "title": "Put the Cup on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1211,
      "durationSeconds": 5021.265322586373,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:55:11.224912+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1177-REMOTE",
      "taskId": 1177,
      "title": "Put the Candle on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:41:27.213287+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1178-REMOTE",
      "taskId": 1178,
      "title": "Put the Glasses Case beside the Candle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:42:45.201936+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1179-REMOTE",
      "taskId": 1179,
      "title": "Rotate the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:52:31.207624+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1180-REMOTE",
      "taskId": 1180,
      "title": "Rotate the Glasses Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:50:33.201861+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1181-REMOTE",
      "taskId": 1181,
      "title": "Put the Bracelet on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:55:31.216568+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1182-REMOTE",
      "taskId": 1182,
      "title": "Put the Diamond on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:55:43.203336+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1183-REMOTE",
      "taskId": 1183,
      "title": "Put the Ring Box on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:55:55.217851+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1184-REMOTE",
      "taskId": 1184,
      "title": "Put the Bracelet on the Ring Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:56:01.213859+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1185-REMOTE",
      "taskId": 1185,
      "title": "Put the Diamond on the Ring Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:48:03.203696+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1186-REMOTE",
      "taskId": 1186,
      "title": "Rotate the Ring Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:52:49.190383+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1187-REMOTE",
      "taskId": 1187,
      "title": "Put the Croissant on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:14:45.229823+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1188-REMOTE",
      "taskId": 1188,
      "title": "Put the Fork on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:14:39.204890+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1189-REMOTE",
      "taskId": 1189,
      "title": "Put the Cup on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:48:41.228754+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1190-REMOTE",
      "taskId": 1190,
      "title": "Put the Croissant beside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:48:49.187302+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1191-REMOTE",
      "taskId": 1191,
      "title": "Put the Fork beside the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:59:01.200736+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1192-REMOTE",
      "taskId": 1192,
      "title": "Rotate the Croissant",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:55:03.227375+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1193-REMOTE",
      "taskId": 1193,
      "title": "Put the Plum on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1209,
      "durationSeconds": 5012.972564002415,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:14:49.218881+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1194-REMOTE",
      "taskId": 1194,
      "title": "Put the Banana on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1212,
      "durationSeconds": 5025.411701878352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T05:52:53.207077+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1195-REMOTE",
      "taskId": 1195,
      "title": "Put the Plum in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1224,
      "durationSeconds": 5075.168253382098,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:54:29.215293+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1196-REMOTE",
      "taskId": 1196,
      "title": "Put the Banana in the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:54:33.223040+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1197-REMOTE",
      "taskId": 1197,
      "title": "Put the Plum beside the Banana",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1216,
      "durationSeconds": 5041.997219046267,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:54:47.214060+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1198-REMOTE",
      "taskId": 1198,
      "title": "Rotate the Banana",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1218,
      "durationSeconds": 5050.289977630225,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:54:41.221121+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1199-REMOTE",
      "taskId": 1199,
      "title": "Put the Plum in the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 659,
      "durationSeconds": 2732.4639534140542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:19:21.654915+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1200-REMOTE",
      "taskId": 1200,
      "title": "Put the Banana in the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:09:01.237859+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1201-REMOTE",
      "taskId": 1201,
      "title": "Pick up the Plum - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:54:11.238483+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1202-REMOTE",
      "taskId": 1202,
      "title": "Pick up the Banana - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T13:55:23.217715+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1203-REMOTE",
      "taskId": 1203,
      "title": "Pick up the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:12:51.212031+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1204-REMOTE",
      "taskId": 1204,
      "title": "Rearrange Your Bathroom - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:35.203031+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1205-REMOTE",
      "taskId": 1205,
      "title": "Rearrange Your Bathroom 2 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:03:13.225070+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1206-REMOTE",
      "taskId": 1206,
      "title": "Rearrange Your Bathroom 3 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:03:05.221900+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1207-REMOTE",
      "taskId": 1207,
      "title": "Rearrange Your Bathroom 4 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:29.205025+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1208-REMOTE",
      "taskId": 1208,
      "title": "Rearrange Your Bathroom 5 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:25.253535+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1209-REMOTE",
      "taskId": 1209,
      "title": "Rearrange Your Bathroom 6 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:47.230263+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1210-REMOTE",
      "taskId": 1210,
      "title": "Rearrange Your Dining Table - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:19.212051+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1211-REMOTE",
      "taskId": 1211,
      "title": "Rearrange Your Dining Table 2 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:02:21.227232+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1212-REMOTE",
      "taskId": 1212,
      "title": "Rearrange Your Dining Table 3 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:18:13.236663+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1213-REMOTE",
      "taskId": 1213,
      "title": "Rearrange Your Dining Table 4 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:02:01.229475+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1214-REMOTE",
      "taskId": 1214,
      "title": "Rearrange Your Dining Table 5 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:12:25.196300+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1215-REMOTE",
      "taskId": 1215,
      "title": "Rearrange Your Dining Table 6 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T17:19:59.252583+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1216-REMOTE",
      "taskId": 1216,
      "title": "Rearrange Your Toy Table - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:56:51.232925+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1217-REMOTE",
      "taskId": 1217,
      "title": "Rearrange Your Toy Table 2 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:53:09.223179+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1218-REMOTE",
      "taskId": 1218,
      "title": "Rearrange Your Toy Table 3 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:56:41.198059+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1219-REMOTE",
      "taskId": 1219,
      "title": "Rearrange Your Toy Table 4 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:53:15.211279+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1220-REMOTE",
      "taskId": 1220,
      "title": "Rearrange Your Toy Table 5 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:56:03.223099+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1221-REMOTE",
      "taskId": 1221,
      "title": "Rearrange Your Toy Table 6 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:54:03.214413+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1222-REMOTE",
      "taskId": 1222,
      "title": "Put the Hammer in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:56:11.224371+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1223-REMOTE",
      "taskId": 1223,
      "title": "Put the Screwdriver in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:20:01.215208+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1224-REMOTE",
      "taskId": 1224,
      "title": "Put the Cup in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:19:55.247659+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1225-REMOTE",
      "taskId": 1225,
      "title": "Insert the Screwdriver into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:09:37.202885+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1226-REMOTE",
      "taskId": 1226,
      "title": "Rotate the Screwdriver",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:06:43.205735+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1227-REMOTE",
      "taskId": 1227,
      "title": "Rotate the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:06:23.220565+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1228-REMOTE",
      "taskId": 1228,
      "title": "Put the Cube Block in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:59:59.213841+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1229-REMOTE",
      "taskId": 1229,
      "title": "Put the Ball in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:59:49.207550+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1230-REMOTE",
      "taskId": 1230,
      "title": "Put the Toy Figurine in the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:59:41.217263+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1231-REMOTE",
      "taskId": 1231,
      "title": "Put the Ball beside the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:59:29.222715+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1232-REMOTE",
      "taskId": 1232,
      "title": "Put the Ball beside the Toy Figurine",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:59:13.259457+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1233-REMOTE",
      "taskId": 1233,
      "title": "Put the Toy Figurine beside the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:58:37.211504+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1234-REMOTE",
      "taskId": 1234,
      "title": "Put the Garlic Bulb into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:58:05.199429+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1235-REMOTE",
      "taskId": 1235,
      "title": "Put the Strawberry into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:57:53.230988+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1236-REMOTE",
      "taskId": 1236,
      "title": "Put the Spoon into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:57:35.217454+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1237-REMOTE",
      "taskId": 1237,
      "title": "Put the Spoon beside the Garlic Bulb",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:57:05.234334+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1238-REMOTE",
      "taskId": 1238,
      "title": "Put the Spoon beside the Strawberry",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1199,
      "durationSeconds": 4971.5087710826265,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:03:53.218221+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1239-REMOTE",
      "taskId": 1239,
      "title": "Rotate the Spoon",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1199,
      "durationSeconds": 4971.5087710826265,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:53:43.198142+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1240-REMOTE",
      "taskId": 1240,
      "title": "Put the Carrot on the Cutting Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1223,
      "durationSeconds": 5071.021874090119,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:49:57.213849+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1241-REMOTE",
      "taskId": 1241,
      "title": "Put the Cucumber on the Cutting Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1264,
      "durationSeconds": 5241.023425061251,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:03:07.223033+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1242-REMOTE",
      "taskId": 1242,
      "title": "Put the Knife on the Cutting Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1276,
      "durationSeconds": 5290.779976564997,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:50:17.200261+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1243-REMOTE",
      "taskId": 1243,
      "title": "Put the Carrot beside the Cucumber",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1280,
      "durationSeconds": 5307.365493732913,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:50:29.206148+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1244-REMOTE",
      "taskId": 1244,
      "title": "Put the Cucumber beside the Knife",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1253,
      "durationSeconds": 5195.413252849484,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:02:59.248482+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1245-REMOTE",
      "taskId": 1245,
      "title": "Rotate the Cucumber",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:50:37.205869+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1246-REMOTE",
      "taskId": 1246,
      "title": "Put the Clock on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:20:41.238269+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1247-REMOTE",
      "taskId": 1247,
      "title": "Put the Candle on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1221,
      "durationSeconds": 5062.729115506161,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:02:45.244564+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1248-REMOTE",
      "taskId": 1248,
      "title": "Put the Remote Control on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1221,
      "durationSeconds": 5062.729115506161,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:20:31.211855+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1249-REMOTE",
      "taskId": 1249,
      "title": "Put the Candle beside the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1208,
      "durationSeconds": 5008.826184710437,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:20:27.258274+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1250-REMOTE",
      "taskId": 1250,
      "title": "Put the Clock beside the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T15:20:21.233855+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1251-REMOTE",
      "taskId": 1251,
      "title": "Rotate the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:03:33.214684+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1252-REMOTE",
      "taskId": 1252,
      "title": "Remove loose lid",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:02:35.262320+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1255-REMOTE",
      "taskId": 1255,
      "title": "Put the Flip Flop on the Shoe Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:02:23.214143+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1256-REMOTE",
      "taskId": 1256,
      "title": "Put the Glasses Case on the Shoe Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1217,
      "durationSeconds": 5046.143598338246,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:01:21.226660+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1257-REMOTE",
      "taskId": 1257,
      "title": "Put the Perfume Bottle on the Shoe Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1268,
      "durationSeconds": 5257.608942229167,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:11:03.223268+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1258-REMOTE",
      "taskId": 1258,
      "title": "Put the Glasses Case beside the Flip Flop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1255,
      "durationSeconds": 5203.706011433442,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:04:31.190305+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1259-REMOTE",
      "taskId": 1259,
      "title": "Rotate the Flip Flop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1255,
      "durationSeconds": 5203.706011433442,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T12:29:39.211040+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1260-REMOTE",
      "taskId": 1260,
      "title": "Rotate the Glasses Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1253,
      "durationSeconds": 5195.413252849484,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:09:29.208026+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1267-REMOTE",
      "taskId": 1267,
      "title": "Put the Computer Mouse on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:04:23.232782+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1268-REMOTE",
      "taskId": 1268,
      "title": "Put the Pen on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1258,
      "durationSeconds": 5216.145149309378,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:11:07.238673+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1269-REMOTE",
      "taskId": 1269,
      "title": "Put the Wallet on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1247,
      "durationSeconds": 5170.534977097611,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:00:53.232655+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1270-REMOTE",
      "taskId": 1270,
      "title": "Put the Pen beside the Computer Mouse",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1263,
      "durationSeconds": 5236.877045769273,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:04:01.217858+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1271-REMOTE",
      "taskId": 1271,
      "title": "Rotate the Pen",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T16:49:19.260887+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1272-REMOTE",
      "taskId": 1272,
      "title": "Rotate the Computer Mouse",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1272,
      "durationSeconds": 5274.194459397082,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:34:39.220962+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1273-REMOTE",
      "taskId": 1273,
      "title": "Place object into tight slot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-03T10:55:19.221677+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1274-REMOTE",
      "taskId": 1274,
      "title": "Put the Calculator on the Pencil Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1259,
      "durationSeconds": 5220.291528601357,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:03:51.415453+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1275-REMOTE",
      "taskId": 1275,
      "title": "Put the Eraser on the Pencil Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1274,
      "durationSeconds": 5282.48721798104,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:03:43.217573+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1276-REMOTE",
      "taskId": 1276,
      "title": "Put the Cup on the Pencil Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:03:33.220875+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1277-REMOTE",
      "taskId": 1277,
      "title": "Put the Eraser into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1275,
      "durationSeconds": 5286.6335972730185,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:03:21.257384+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1278-REMOTE",
      "taskId": 1278,
      "title": "Put the Eraser beside the cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1274,
      "durationSeconds": 5282.48721798104,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:03:09.250452+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1279-REMOTE",
      "taskId": 1279,
      "title": "Put the Eraser on the Calculator",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:35.198938+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1280-REMOTE",
      "taskId": 1280,
      "title": "Put the Carrot on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:31.216605+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1281-REMOTE",
      "taskId": 1281,
      "title": "Put the Cucumber on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:25.207181+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1282-REMOTE",
      "taskId": 1282,
      "title": "Put the Potato on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:19.217328+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1283-REMOTE",
      "taskId": 1283,
      "title": "Put the Potato beside the Cucumber",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:13.226934+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1284-REMOTE",
      "taskId": 1284,
      "title": "Rotate the Carrot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:09:05.241846+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1285-REMOTE",
      "taskId": 1285,
      "title": "Rotate the Cucumber",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1156,
      "durationSeconds": 4793.2144615275365,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:00:55.075841+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1286-REMOTE",
      "taskId": 1286,
      "title": "Insert long object into narrow opening",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 530,
      "durationSeconds": 2197.5810247487843,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:57:39.196950+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1288-REMOTE",
      "taskId": 1288,
      "title": "Put the Glue on the Toolbox",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:07.251739+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1289-REMOTE",
      "taskId": 1289,
      "title": "Put the Pilers on the Toolbox",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1207,
      "durationSeconds": 5004.679805418457,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:15:01.201604+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1290-REMOTE",
      "taskId": 1290,
      "title": "Put the Scissors on the Toolbox",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:14:53.203413+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1291-REMOTE",
      "taskId": 1291,
      "title": "Put the Glue beside the Scissors",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:14:13.210047+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1292-REMOTE",
      "taskId": 1292,
      "title": "Rotate the Pilers",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:48:21.227051+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1293-REMOTE",
      "taskId": 1293,
      "title": "Rotate the Scissors",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:07:45.316136+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1294-REMOTE",
      "taskId": 1294,
      "title": "Put the Jam Jar on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:16:41.206569+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1295-REMOTE",
      "taskId": 1295,
      "title": "Put the Knife on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 692,
      "durationSeconds": 2869.294470049356,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:28:38.706824+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1296-REMOTE",
      "taskId": 1296,
      "title": "Put the Toast on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1158,
      "durationSeconds": 4801.5072201114945,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:09:29.491433+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1297-REMOTE",
      "taskId": 1297,
      "title": "Put the Knife on the Toast",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 500,
      "durationSeconds": 2073.189645989419,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:26:29.114792+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1298-REMOTE",
      "taskId": 1298,
      "title": "Put the Jam Jar on the Toast",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:09:13.241853+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1299-REMOTE",
      "taskId": 1299,
      "title": "Put the Knife on the Jam Jar",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 597,
      "durationSeconds": 2475.3884373113665,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:30:28.582943+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1300-REMOTE",
      "taskId": 1300,
      "title": "Put the Peach on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T15:20:51.266494+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1301-REMOTE",
      "taskId": 1301,
      "title": "Put the Lemon on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:09:37.181527+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1302-REMOTE",
      "taskId": 1302,
      "title": "Put the Lemon beside the Peach",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1124,
      "durationSeconds": 4660.530324184214,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:33:53.088776+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1303-REMOTE",
      "taskId": 1303,
      "title": "Put the Coffee Cup on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:09:49.220591+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1304-REMOTE",
      "taskId": 1304,
      "title": "Rotate the Lemon",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 472,
      "durationSeconds": 1957.0910258140116,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:29:22.628408+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1305-REMOTE",
      "taskId": 1305,
      "title": "Rotate the Coffee Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1184,
      "durationSeconds": 4909.313081702944,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:19:53.402347+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1306-REMOTE",
      "taskId": 1306,
      "title": "Put the Computer Mouse on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:57.201702+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1307-REMOTE",
      "taskId": 1307,
      "title": "Put the Cup on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:53.206899+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1308-REMOTE",
      "taskId": 1308,
      "title": "Put the Pen on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:47.219088+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1309-REMOTE",
      "taskId": 1309,
      "title": "Put Both Items on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 545,
      "durationSeconds": 2259.7767141284667,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:31:57.123174+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1310-REMOTE",
      "taskId": 1310,
      "title": "Put the Cup beside the Pen",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:37.204064+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1311-REMOTE",
      "taskId": 1311,
      "title": "Rotate the Pen",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 394,
      "durationSeconds": 1633.6734410396623,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:46:05.954305+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1312-REMOTE",
      "taskId": 1312,
      "title": "Put the Cheesecake on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:03:59.237655+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1313-REMOTE",
      "taskId": 1313,
      "title": "Put the Churro on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:04:37.203269+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1314-REMOTE",
      "taskId": 1314,
      "title": "Put the Macaron on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:04:53.228973+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1315-REMOTE",
      "taskId": 1315,
      "title": "Put the Macaron beside the Churro",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:05:13.209498+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1316-REMOTE",
      "taskId": 1316,
      "title": "Rotate the Churro",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T11:45:09.242667+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1317-REMOTE",
      "taskId": 1317,
      "title": "Rotate the Cheesecake",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:27.227032+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1318-REMOTE",
      "taskId": 1318,
      "title": "Put the Chocolate on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:05:41.206585+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1319-REMOTE",
      "taskId": 1319,
      "title": "Put the Popsicle on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1212,
      "durationSeconds": 5025.411701878352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:05:27.242760+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1320-REMOTE",
      "taskId": 1320,
      "title": "Put the Sausage on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:05:31.231882+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1321-REMOTE",
      "taskId": 1321,
      "title": "Put the Popsicle beside the Sausage",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:05:59.229220+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1322-REMOTE",
      "taskId": 1322,
      "title": "Rotate the Popsicle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:11:19.207945+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1323-REMOTE",
      "taskId": 1323,
      "title": "Rotate the Sausage",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:21.283288+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1324-REMOTE",
      "taskId": 1324,
      "title": "Put the Beaker on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:15.233015+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1325-REMOTE",
      "taskId": 1325,
      "title": "Put the Test Tube on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:11.280800+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1326-REMOTE",
      "taskId": 1326,
      "title": "Put the Medicine Bottle on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:42:03.229162+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1327-REMOTE",
      "taskId": 1327,
      "title": "Put the Test Tube beside the Medicine Bottle",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:33:01.199497+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1328-REMOTE",
      "taskId": 1328,
      "title": "Put the Test Tube beside the Beaker",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:03:21.219824+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1329-REMOTE",
      "taskId": 1329,
      "title": "Rotate the Test Tube",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 680,
      "durationSeconds": 2819.53791854561,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:00:02.830754+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1330-REMOTE",
      "taskId": 1330,
      "title": "Put the Soap into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:01:13.233411+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1331-REMOTE",
      "taskId": 1331,
      "title": "Put the Toothbrush into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1531,
      "durationSeconds": 6348.106696019601,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:03:11.237864+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1332-REMOTE",
      "taskId": 1332,
      "title": "Put the Toothpaste into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1199,
      "durationSeconds": 4971.5087710826265,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:06:19.230278+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1333-REMOTE",
      "taskId": 1333,
      "title": "Put the Toothbrush beside the Toothpaste",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1189,
      "durationSeconds": 4930.044978162839,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:06:23.221132+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1334-REMOTE",
      "taskId": 1334,
      "title": "Put the Toothbrush beside the Soap",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:02:57.225952+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1335-REMOTE",
      "taskId": 1335,
      "title": "Rotate the Soap",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T00:10:29.191304+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1337-REMOTE",
      "taskId": 1337,
      "title": "Put the Comb on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:03:25.224794+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1338-REMOTE",
      "taskId": 1338,
      "title": "Put the Perfume on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:03:15.222704+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1339-REMOTE",
      "taskId": 1339,
      "title": "Put the Lipstick on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:03:05.225748+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1340-REMOTE",
      "taskId": 1340,
      "title": "Put the Perfume beside the Comb",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:03:11.214876+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1341-REMOTE",
      "taskId": 1341,
      "title": "Put the Lipstick beside the Comb",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:04:01.205996+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1342-REMOTE",
      "taskId": 1342,
      "title": "Rotate the Comb",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:03:01.203162+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1343-REMOTE",
      "taskId": 1343,
      "title": "Put the Apple into the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:02:57.230664+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1344-REMOTE",
      "taskId": 1344,
      "title": "Put the Chicken Leg into the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:02:53.239049+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1345-REMOTE",
      "taskId": 1345,
      "title": "Put the Salt Shaker into the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:02:47.238483+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1346-REMOTE",
      "taskId": 1346,
      "title": "Put the Apple beside the Chicken Leg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:02:41.241012+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1347-REMOTE",
      "taskId": 1347,
      "title": "Put the Chicken Leg beside the Salt Shaker",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 975,
      "durationSeconds": 4042.7198096793672,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:03:19.221066+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1348-REMOTE",
      "taskId": 1348,
      "title": "Rotate the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1190,
      "durationSeconds": 4934.191357454817,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:53.216132+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1350-REMOTE",
      "taskId": 1350,
      "title": "Place object into tight slot",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1175,
      "durationSeconds": 4871.995668075135,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:33:35.255996+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1351-REMOTE",
      "taskId": 1351,
      "title": "Insert ring over hook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1199,
      "durationSeconds": 4971.5087710826265,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T01:22:27.202629+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1352-REMOTE",
      "taskId": 1352,
      "title": "Put the Croissant on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1043,
      "durationSeconds": 4324.673601533928,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:03:07.489886+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1353-REMOTE",
      "taskId": 1353,
      "title": "Put the Croissant on the Dough Ball",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1007,
      "durationSeconds": 4175.40394702269,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:03:21.248221+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1354-REMOTE",
      "taskId": 1354,
      "title": "Put the Rolling Pin on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 763,
      "durationSeconds": 3163.6873997798534,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:11.409864+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1355-REMOTE",
      "taskId": 1355,
      "title": "Put the Croissant beside the Rolling Pin",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 773,
      "durationSeconds": 3205.151192699642,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:18:59.230194+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1356-REMOTE",
      "taskId": 1356,
      "title": "Put the Rolling Pin on the Dough Ball",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 726,
      "durationSeconds": 3010.2713659766364,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:21.242100+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1357-REMOTE",
      "taskId": 1357,
      "title": "Rotate the Rolling Pin",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 866,
      "durationSeconds": 3590.7644668536736,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:54:27.609545+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1358-REMOTE",
      "taskId": 1358,
      "title": "Pick up the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1033,
      "durationSeconds": 4283.20980861414,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:34:19.586516+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1359-REMOTE",
      "taskId": 1359,
      "title": "Pick up the Garlic Bulb - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 422,
      "durationSeconds": 1749.7720612150697,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:35:59.151423+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1360-REMOTE",
      "taskId": 1360,
      "title": "Pick up the Strawberry - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 539,
      "durationSeconds": 2234.8984383765937,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T19:08:24.280921+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1361-REMOTE",
      "taskId": 1361,
      "title": "Put the Garlic Bulb into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 134,
      "durationSeconds": 555.6148251251643,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:39:22.755482+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1362-REMOTE",
      "taskId": 1362,
      "title": "Put the Strawberry into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 126,
      "durationSeconds": 522.4437907893335,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T20:38:40.726678+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1363-REMOTE",
      "taskId": 1363,
      "title": "Pick up the Pencil Box - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:57:25.198949+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1364-REMOTE",
      "taskId": 1364,
      "title": "Pick up the Cup - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1185,
      "durationSeconds": 4913.459460994923,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:36:49.732476+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1365-REMOTE",
      "taskId": 1365,
      "title": "Pick up the Eraser - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 353,
      "durationSeconds": 1463.6718900685298,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:38:20.922871+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1366-REMOTE",
      "taskId": 1366,
      "title": "Put the Cup on the Pencil Box - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 186,
      "durationSeconds": 771.2265483080639,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T07:22:05.265852+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1367-REMOTE",
      "taskId": 1367,
      "title": "Put the Eraser on the Pencil Box - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 177,
      "durationSeconds": 733.9091346802543,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:32:41.234672+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1368-REMOTE",
      "taskId": 1368,
      "title": "Pick up the Glue - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 456,
      "durationSeconds": 1890.74895714235,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T10:23:46.859554+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1369-REMOTE",
      "taskId": 1369,
      "title": "Pick up the Pilers - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 374,
      "durationSeconds": 1550.7458552000853,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T10:27:56.631483+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1370-REMOTE",
      "taskId": 1370,
      "title": "Put the Glue on the Toolbox - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 101,
      "durationSeconds": 418.78430848986267,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T16:38:45.224695+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1371-REMOTE",
      "taskId": 1371,
      "title": "Put the Pilers on the Toolbox - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 79,
      "durationSeconds": 327.5639640663282,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:42:09.282271+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1372-REMOTE",
      "taskId": 1372,
      "title": "Put Both Items on the Toolbox - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 88,
      "durationSeconds": 364.88137769413777,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T08:40:22.985563+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1373-REMOTE",
      "taskId": 1373,
      "title": "Move the Lemon to Its Right - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 642,
      "durationSeconds": 2661.975505450414,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T10:30:42.533619+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1374-REMOTE",
      "taskId": 1374,
      "title": "Pick up the Peach - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 710,
      "durationSeconds": 2943.929297304975,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T10:32:39.831640+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1375-REMOTE",
      "taskId": 1375,
      "title": "Pick up the Lemon - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 577,
      "durationSeconds": 2392.4608514717897,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T10:37:21.671844+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1376-REMOTE",
      "taskId": 1376,
      "title": "Move the Peach to Its Left - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 405,
      "durationSeconds": 1679.2836132514294,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T10:39:22.440517+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1377-REMOTE",
      "taskId": 1377,
      "title": "Move the Peach towards the Camera - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 420,
      "durationSeconds": 1741.479302631112,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T09:42:36.260323+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1378-REMOTE",
      "taskId": 1378,
      "title": "Pick up the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 567,
      "durationSeconds": 2350.9970585520014,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:21:51.216942+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1379-REMOTE",
      "taskId": 1379,
      "title": "Pick up the Macaron - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 471,
      "durationSeconds": 1952.9446465220328,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:22:07.255344+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1380-REMOTE",
      "taskId": 1380,
      "title": "Pick up the Churro - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T10:48:59.213840+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1381-REMOTE",
      "taskId": 1381,
      "title": "Put Macaron on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 217,
      "durationSeconds": 899.7643063594079,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:22:21.201961+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1382-REMOTE",
      "taskId": 1382,
      "title": "Put Churro on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 234,
      "durationSeconds": 970.2527543230481,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T08:25:21.940532+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1383-REMOTE",
      "taskId": 1383,
      "title": "Pick up the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 781,
      "durationSeconds": 3238.3222270354727,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:07:36.800077+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1384-REMOTE",
      "taskId": 1384,
      "title": "Pick up the Potato - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 864,
      "durationSeconds": 3582.471708269716,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T20:43:20.956569+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1385-REMOTE",
      "taskId": 1385,
      "title": "Pick up the Carrot - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:39:17.193602+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1386-REMOTE",
      "taskId": 1386,
      "title": "Put Potato on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 175,
      "durationSeconds": 725.6163760962967,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:17:44.227514+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1387-REMOTE",
      "taskId": 1387,
      "title": "Put Carrot on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 133,
      "durationSeconds": 551.4684458331855,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:23:09.271932+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1388-REMOTE",
      "taskId": 1388,
      "title": "Rearrange Your Kitchen - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 466,
      "durationSeconds": 1932.2127500621384,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T18:23:17.231683+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1389-REMOTE",
      "taskId": 1389,
      "title": "Rearrange Your Kitchen 2 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 438,
      "durationSeconds": 1816.114129886731,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:04:55.223086+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1390-REMOTE",
      "taskId": 1390,
      "title": "Rearrange Your Kitchen 3 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 426,
      "durationSeconds": 1766.357578382985,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:12:39.205144+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1391-REMOTE",
      "taskId": 1391,
      "title": "Rearrange Your Kitchen 4 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 489,
      "durationSeconds": 2027.5794737776519,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:35:31.241854+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1392-REMOTE",
      "taskId": 1392,
      "title": "Rearrange Your Kitchen 5 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 437,
      "durationSeconds": 1811.9677505947523,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:35:41.193440+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1393-REMOTE",
      "taskId": 1393,
      "title": "Rearrange Your Kitchen 6 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 432,
      "durationSeconds": 1791.235854134858,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:35:45.205136+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1394-REMOTE",
      "taskId": 1394,
      "title": "Put the Cup on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:12:59.215869+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1395-REMOTE",
      "taskId": 1395,
      "title": "Put the Kiwi on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:13:05.218535+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1396-REMOTE",
      "taskId": 1396,
      "title": "Put the Pear on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:40:43.206540+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1397-REMOTE",
      "taskId": 1397,
      "title": "Put the Kiwi beside the Pear",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 531,
      "durationSeconds": 2201.727404040763,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:43:21.202080+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1398-REMOTE",
      "taskId": 1398,
      "title": "Put the Cup beside the Pear",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 131,
      "durationSeconds": 543.1756872492277,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:33:55.190853+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1399-REMOTE",
      "taskId": 1399,
      "title": "Rotate the Kiwi",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 385,
      "durationSeconds": 1596.3560274118527,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:32:27.256163+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1400-REMOTE",
      "taskId": 1400,
      "title": "Put the Cup on the Notebook (F)",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:25:33.250866+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1401-REMOTE",
      "taskId": 1401,
      "title": "Rotate the Kettle (F)",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 346,
      "durationSeconds": 1434.647235024678,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:35:57.199792+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1402-REMOTE",
      "taskId": 1402,
      "title": "Put the Dog Ball into the Bowl (F)",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1057,
      "durationSeconds": 4382.722911621632,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:06:27.021074+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1403-REMOTE",
      "taskId": 1403,
      "title": "Put the Dog Ball beside the Chew Toy (F)",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:07.267395+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1404-REMOTE",
      "taskId": 1404,
      "title": "Put the Lipstick into the Basket (F)",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1191,
      "durationSeconds": 4938.3377367467965,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:05.213870+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1405-REMOTE",
      "taskId": 1405,
      "title": "Put the Compact Powder Case on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 416,
      "durationSeconds": 1724.8937854631965,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:25.244767+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1406-REMOTE",
      "taskId": 1406,
      "title": "Put the Foundation on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 892,
      "durationSeconds": 3698.5703284451233,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:10:03.223441+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1407-REMOTE",
      "taskId": 1407,
      "title": "Put the Makeup Brush on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 720,
      "durationSeconds": 2985.3930902247635,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:10:11.206432+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1408-REMOTE",
      "taskId": 1408,
      "title": "Put the Foundation on the Compact Powder Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 520,
      "durationSeconds": 2156.117231828996,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:27.226862+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1409-REMOTE",
      "taskId": 1409,
      "title": "Put the Makeup Brush on the Compact Powder Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 728,
      "durationSeconds": 3018.564124560594,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:09:15.217758+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1410-REMOTE",
      "taskId": 1410,
      "title": "Rotate the Makeup Brush",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1216,
      "durationSeconds": 5041.997219046267,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:19:45.222604+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1411-REMOTE",
      "taskId": 1411,
      "title": "Put the Cube Block on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1209,
      "durationSeconds": 5012.972564002415,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:01:53.225552+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1412-REMOTE",
      "taskId": 1412,
      "title": "Put the Plush Toy on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1209,
      "durationSeconds": 5012.972564002415,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:11:33.222183+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1413-REMOTE",
      "taskId": 1413,
      "title": "Put the Toy Figurine on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:11:15.248453+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1414-REMOTE",
      "taskId": 1414,
      "title": "Put the Plush Toy on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1213,
      "durationSeconds": 5029.55808117033,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:11:07.237301+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1415-REMOTE",
      "taskId": 1415,
      "title": "Put the Toy Figurine on the Cube Block",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1212,
      "durationSeconds": 5025.411701878352,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T18:10:53.222097+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1416-REMOTE",
      "taskId": 1416,
      "title": "Rotate the Plush Toy",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1222,
      "durationSeconds": 5066.87549479814,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:15.265996+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1417-REMOTE",
      "taskId": 1417,
      "title": "Put the Card Holder on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1213,
      "durationSeconds": 5029.55808117033,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:15.250857+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1418-REMOTE",
      "taskId": 1418,
      "title": "Put the Coffee Cup on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1214,
      "durationSeconds": 5033.70446046231,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T11:02:11.309926+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1419-REMOTE",
      "taskId": 1419,
      "title": "Put the Earbud Case on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1205,
      "durationSeconds": 4996.387046834499,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:32:19.268463+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1420-REMOTE",
      "taskId": 1420,
      "title": "Put the Card Holder on the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:28:33.202457+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1421-REMOTE",
      "taskId": 1421,
      "title": "Put the Earbud Case on the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T07:28:11.195226+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1422-REMOTE",
      "taskId": 1422,
      "title": "Rotate the Coffee Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1210,
      "durationSeconds": 5017.118943294394,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T07:24:35.207667+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1423-REMOTE",
      "taskId": 1423,
      "title": "Put the Cola into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T12:20:15.244290+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1424-REMOTE",
      "taskId": 1424,
      "title": "Put the Apple into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:28:41.196168+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1425-REMOTE",
      "taskId": 1425,
      "title": "Put the Sausage Roll into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1208,
      "durationSeconds": 5008.826184710437,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:34:01.219960+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1426-REMOTE",
      "taskId": 1426,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T11:17:39.214401+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1427-REMOTE",
      "taskId": 1427,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T03:24:21.195755+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1428-REMOTE",
      "taskId": 1428,
      "title": "Rotate the Sausage Roll",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1211,
      "durationSeconds": 5021.265322586373,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:28:39.186258+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1435-REMOTE",
      "taskId": 1435,
      "title": "Put the Game Controller on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:21:29.261843+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1436-REMOTE",
      "taskId": 1436,
      "title": "Put the Remote Control on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1242,
      "durationSeconds": 5149.803080637716,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:55.184168+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1437-REMOTE",
      "taskId": 1437,
      "title": "Put the Toy Figurine on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1208,
      "durationSeconds": 5008.826184710437,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:37.200680+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1438-REMOTE",
      "taskId": 1438,
      "title": "Put the Toy Figurine beside the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1203,
      "durationSeconds": 4988.094288250542,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:29.213636+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1439-REMOTE",
      "taskId": 1439,
      "title": "Rotate the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1247,
      "durationSeconds": 5170.534977097611,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:57.211107+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1440-REMOTE",
      "taskId": 1440,
      "title": "Rotate the Game Controller",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1059,
      "durationSeconds": 4391.015670205589,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:50:47.212275+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1441-REMOTE",
      "taskId": 1441,
      "title": "Put the Facial Cleanser into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1237,
      "durationSeconds": 5129.071184177823,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:52:09.217528+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1442-REMOTE",
      "taskId": 1442,
      "title": "Put the Deodorant into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1276,
      "durationSeconds": 5290.779976564997,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:11.207758+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1443-REMOTE",
      "taskId": 1443,
      "title": "Put the Toothpaste into the Basket",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1315,
      "durationSeconds": 5452.488768952172,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:55.227339+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1444-REMOTE",
      "taskId": 1444,
      "title": "Put the Facial Cleanser beside the Toothpaste",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1341,
      "durationSeconds": 5560.294630543622,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:13.277851+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1445-REMOTE",
      "taskId": 1445,
      "title": "Put the Deodorant beside the Toothpaste",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1330,
      "durationSeconds": 5514.684458331854,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:45.224117+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1446-REMOTE",
      "taskId": 1446,
      "title": "Rotate the Toothpaste",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:28:59.215335+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1447-REMOTE",
      "taskId": 1447,
      "title": "Put the Cup on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:37.211087+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1448-REMOTE",
      "taskId": 1448,
      "title": "Put the Pen on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:19.273983+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1449-REMOTE",
      "taskId": 1449,
      "title": "Put the Pencil Case on the Book",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:38:13.226551+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1450-REMOTE",
      "taskId": 1450,
      "title": "Put the Cup on the Pencil Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:50:31.217857+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1451-REMOTE",
      "taskId": 1451,
      "title": "Put the Pen on the Pencil Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:46:35.213246+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1452-REMOTE",
      "taskId": 1452,
      "title": "Put the Pen into the Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:55.218108+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1455-REMOTE",
      "taskId": 1455,
      "title": "Reach target pose",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T13:17:13.215924+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1456-REMOTE",
      "taskId": 1456,
      "title": "Fine placement",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1193,
      "durationSeconds": 4946.630495330754,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T12:08:01.218264+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1458-REMOTE",
      "taskId": 1458,
      "title": "Insert utensil into holder",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1195,
      "durationSeconds": 4954.9232539147115,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-18T15:16:45.274531+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1459-REMOTE",
      "taskId": 1459,
      "title": "Fit lid onto container",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:02:37.258793+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1460-REMOTE",
      "taskId": 1460,
      "title": "Put the Peanut Butter on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1208,
      "durationSeconds": 5008.826184710437,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:28:53.232683+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1461-REMOTE",
      "taskId": 1461,
      "title": "Put the Toast on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1204,
      "durationSeconds": 4992.240667542521,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:50:13.218239+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1462-REMOTE",
      "taskId": 1462,
      "title": "Put the Spoon on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1206,
      "durationSeconds": 5000.533426126479,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:05.217857+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1463-REMOTE",
      "taskId": 1463,
      "title": "Put the Toast on the Peanut Butter",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 411,
      "durationSeconds": 1704.1618890033023,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:36:01.195278+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1464-REMOTE",
      "taskId": 1464,
      "title": "Put the Spoon on the Peanut Butter",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 650,
      "durationSeconds": 2695.146539786245,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:36:05.270296+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1465-REMOTE",
      "taskId": 1465,
      "title": "Rotate the Spoon",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1214,
      "durationSeconds": 5033.70446046231,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:25:17.248764+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1466-REMOTE",
      "taskId": 1466,
      "title": "Put the Baby Bottle on the Tissue",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1194,
      "durationSeconds": 4950.776874622733,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:18:54.072616+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1467-REMOTE",
      "taskId": 1467,
      "title": "Put the Pacifier into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 768,
      "durationSeconds": 3184.4192962397474,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:39:57.219966+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1468-REMOTE",
      "taskId": 1468,
      "title": "Put the Baby Bottle into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:22:31.244200+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1469-REMOTE",
      "taskId": 1469,
      "title": "Put the Pacifier on the Tissue",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 441,
      "durationSeconds": 1828.5532677626675,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:39:53.373910+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1470-REMOTE",
      "taskId": 1470,
      "title": "Rotate the Pacifier",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 73,
      "durationSeconds": 302.68568831445515,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T07:40:35.302985+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1471-REMOTE",
      "taskId": 1471,
      "title": "Rotate the Tissue",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 367,
      "durationSeconds": 1521.7212001562336,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:01.217242+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1472-REMOTE",
      "taskId": 1472,
      "title": "Put the Nail Box on the Wooden Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 353,
      "durationSeconds": 1463.6718900685298,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:09.230267+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1473-REMOTE",
      "taskId": 1473,
      "title": "Put the Hammer on the Wooden Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 380,
      "durationSeconds": 1575.6241309519585,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:15.204017+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1474-REMOTE",
      "taskId": 1474,
      "title": "Put the Wrench on the Wooden Board",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 393,
      "durationSeconds": 1629.5270617476833,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:19.222279+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1475-REMOTE",
      "taskId": 1475,
      "title": "Put the Wrench beside the Hammer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 399,
      "durationSeconds": 1654.4053374995565,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:25.200455+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1476-REMOTE",
      "taskId": 1476,
      "title": "Rotate the Wrench",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 365,
      "durationSeconds": 1513.428441572276,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:33.215397+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1477-REMOTE",
      "taskId": 1477,
      "title": "Rotate the Hammer",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 385,
      "durationSeconds": 1596.3560274118527,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:18.269617+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1478-REMOTE",
      "taskId": 1478,
      "title": "Put the Green Onion on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 510,
      "durationSeconds": 2114.6534389092076,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:22.086154+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1479-REMOTE",
      "taskId": 1479,
      "title": "Put the Knife on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 490,
      "durationSeconds": 2031.7258530696306,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:44:34.266692+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1480-REMOTE",
      "taskId": 1480,
      "title": "Put the Tofu on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 361,
      "durationSeconds": 1496.8429244043605,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:24.901392+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1481-REMOTE",
      "taskId": 1481,
      "title": "Put the Green Onion on the Tofu",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 537,
      "durationSeconds": 2226.6056797926362,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:27:39.677758+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1482-REMOTE",
      "taskId": 1482,
      "title": "Put the Knife on the Tofu",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 529,
      "durationSeconds": 2193.4346454568054,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:21:31.053902+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1483-REMOTE",
      "taskId": 1483,
      "title": "Rotate the Green Onion",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 437,
      "durationSeconds": 1811.9677505947523,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:18:18.997924+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1484-REMOTE",
      "taskId": 1484,
      "title": "Put the Cinnamon Roll on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 484,
      "durationSeconds": 2006.8475773177577,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:10:35.255579+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1485-REMOTE",
      "taskId": 1485,
      "title": "Put the Cupcake on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 557,
      "durationSeconds": 2309.533265632213,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:09:40.741534+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1486-REMOTE",
      "taskId": 1486,
      "title": "Put the Fork on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 532,
      "durationSeconds": 2205.873783332742,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:49:32.242086+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1487-REMOTE",
      "taskId": 1487,
      "title": "Put the Fork on the Cinnamon Roll",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 438,
      "durationSeconds": 1816.114129886731,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:53:29.408678+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1488-REMOTE",
      "taskId": 1488,
      "title": "Put the Cupcake on the Cinnamon Roll",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 540,
      "durationSeconds": 2239.0448176685727,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:40:54.048363+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1489-REMOTE",
      "taskId": 1489,
      "title": "Rotate the Fork",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 412,
      "durationSeconds": 1708.3082682952813,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:37:22.110957+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1491-REMOTE",
      "taskId": 1491,
      "title": "Place with orientation",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1115,
      "durationSeconds": 4623.2129105564045,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:21:25.224753+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1492-REMOTE",
      "taskId": 1492,
      "title": "Insert long object into narrow opening",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 868,
      "durationSeconds": 3599.0572254376316,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:31:45.597072+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1494-REMOTE",
      "taskId": 1494,
      "title": "Put the Remote Control on the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 471,
      "durationSeconds": 1952.9446465220328,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:34:30.652164+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1495-REMOTE",
      "taskId": 1495,
      "title": "Put the Ring Box on the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 477,
      "durationSeconds": 1977.8229222739058,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:31:26.810329+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1496-REMOTE",
      "taskId": 1496,
      "title": "Put the Watch on the Tissue Box",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 480,
      "durationSeconds": 1990.2620601498422,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:47:07.238444+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1497-REMOTE",
      "taskId": 1497,
      "title": "Put the Ring Box on the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 460,
      "durationSeconds": 1907.3344743102655,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:47:21.455701+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1498-REMOTE",
      "taskId": 1498,
      "title": "Put the Watch on the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 494,
      "durationSeconds": 2048.311370237546,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:22:27.009709+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1499-REMOTE",
      "taskId": 1499,
      "title": "Rotate the Remote Control",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 433,
      "durationSeconds": 1795.3822334268368,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:13:53.239969+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1500-REMOTE",
      "taskId": 1500,
      "title": "Put the Tomato into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 501,
      "durationSeconds": 2077.3360252813977,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:23:07.209553+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1501-REMOTE",
      "taskId": 1501,
      "title": "Put the Sausage into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 511,
      "durationSeconds": 2118.799818201186,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:23:17.199661+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1502-REMOTE",
      "taskId": 1502,
      "title": "Put the Fork into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 493,
      "durationSeconds": 2044.164990945567,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:24:55.284368+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1503-REMOTE",
      "taskId": 1503,
      "title": "Put the Fork beside the Sausage",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 487,
      "durationSeconds": 2019.2867151936941,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:24:05.218810+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1504-REMOTE",
      "taskId": 1504,
      "title": "Rotate the Fork",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:35.197346+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1505-REMOTE",
      "taskId": 1505,
      "title": "Rotate the Sausage",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:31.278466+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1506-REMOTE",
      "taskId": 1506,
      "title": "Put the Measuring Cup on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:29.192853+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1507-REMOTE",
      "taskId": 1507,
      "title": "Put the Syringe on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:31:43.219257+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1508-REMOTE",
      "taskId": 1508,
      "title": "Put the Test Tube on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:23.209771+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1509-REMOTE",
      "taskId": 1509,
      "title": "Put the Test Tube beside the Syringe",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:27:19.230569+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1510-REMOTE",
      "taskId": 1510,
      "title": "Rotate the Test Tube",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:28:39.215146+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1511-REMOTE",
      "taskId": 1511,
      "title": "Rotate the Syringe",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:28:43.215631+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1512-REMOTE",
      "taskId": 1512,
      "title": "Put the Cup on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:31:15.219072+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1513-REMOTE",
      "taskId": 1513,
      "title": "Put the Pencil on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:28:49.208795+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1514-REMOTE",
      "taskId": 1514,
      "title": "Put the Phone on the Notebook",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1162,
      "durationSeconds": 4818.092737279409,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:43:47.226019+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1515-REMOTE",
      "taskId": 1515,
      "title": "Put the Cup on the Phone",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:52:13.206440+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1516-REMOTE",
      "taskId": 1516,
      "title": "Put the Pencil on the Phone",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1200,
      "durationSeconds": 4975.655150374606,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:31.193553+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1517-REMOTE",
      "taskId": 1517,
      "title": "Rotate the Pencil",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1193,
      "durationSeconds": 4946.630495330754,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:41.230832+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1518-REMOTE",
      "taskId": 1518,
      "title": "Put the Chicken Nugget on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:53.183810+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1519-REMOTE",
      "taskId": 1519,
      "title": "Put the Chicken Wing on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1160,
      "durationSeconds": 4809.799978695452,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:15.196018+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1520-REMOTE",
      "taskId": 1520,
      "title": "Put the Pizza on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:52:11.209441+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1521-REMOTE",
      "taskId": 1521,
      "title": "Put the Chicken Nugget on the Pizza",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:52:03.206967+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1522-REMOTE",
      "taskId": 1522,
      "title": "Put the Chicken Wing on the Pizza",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1202,
      "durationSeconds": 4983.947908958563,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:21.239746+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1523-REMOTE",
      "taskId": 1523,
      "title": "Rotate the Chicken Wing",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 883,
      "durationSeconds": 3661.252914817314,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:55.194755+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1524-REMOTE",
      "taskId": 1524,
      "title": "Put the Apricot into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1052,
      "durationSeconds": 4361.991015161738,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:49.197362+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1525-REMOTE",
      "taskId": 1525,
      "title": "Put the Avocado into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 882,
      "durationSeconds": 3657.106535525335,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:35:25.225848+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1526-REMOTE",
      "taskId": 1526,
      "title": "Put the Kiwi into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1187,
      "durationSeconds": 4921.752219578881,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:05.268609+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1527-REMOTE",
      "taskId": 1527,
      "title": "Rearrange Three Fruits",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1199,
      "durationSeconds": 4971.5087710826265,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:07.227975+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1528-REMOTE",
      "taskId": 1528,
      "title": "Rearrange Three Fruits 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1192,
      "durationSeconds": 4942.484116038775,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:26:07.219085+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1529-REMOTE",
      "taskId": 1529,
      "title": "Rotate the Kiwi",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1129,
      "durationSeconds": 4681.262220644108,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:45:13.213349+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1536-REMOTE",
      "taskId": 1536,
      "title": "Pick up the Earbud Case - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 458,
      "durationSeconds": 1899.0417157263078,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:18:57.865795+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1537-REMOTE",
      "taskId": 1537,
      "title": "Pick up the Coffee Cup - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 383,
      "durationSeconds": 1588.063268827895,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:24:59.238505+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1538-REMOTE",
      "taskId": 1538,
      "title": "Put the Earbud Case on the Book - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 132,
      "durationSeconds": 547.3220665412066,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:24:37.249588+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1539-REMOTE",
      "taskId": 1539,
      "title": "Put Coffee Cup on the Book - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 107,
      "durationSeconds": 443.66258424173566,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:24:33.211709+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1540-REMOTE",
      "taskId": 1540,
      "title": "Rotate the Coffee Cup - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 182,
      "durationSeconds": 754.6410311401485,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:50:55.797307+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1541-REMOTE",
      "taskId": 1541,
      "title": "Pick up the Deodorant - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 369,
      "durationSeconds": 1530.0139587401911,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:16:51.709685+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1542-REMOTE",
      "taskId": 1542,
      "title": "Pick up the Toothpaste - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 397,
      "durationSeconds": 1646.1125789155988,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:25:33.243018+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1543-REMOTE",
      "taskId": 1543,
      "title": "Put the Deodorant into the Basket - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 155,
      "durationSeconds": 642.6887902567199,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:16:23.814568+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1544-REMOTE",
      "taskId": 1544,
      "title": "Put the Toothpaste into the Basket - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 118,
      "durationSeconds": 489.2727564535029,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:11:33.220537+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1545-REMOTE",
      "taskId": 1545,
      "title": "Put Both Items into the Basket - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 113,
      "durationSeconds": 468.5408599936087,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:26:31.216590+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1547-REMOTE",
      "taskId": 1547,
      "title": "Pick up the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 447,
      "durationSeconds": 1853.4315435145406,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:14:56.536595+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1548-REMOTE",
      "taskId": 1548,
      "title": "Pick up the Toast - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 798,
      "durationSeconds": 3308.810674999113,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:08:35.416185+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1549-REMOTE",
      "taskId": 1549,
      "title": "Put the Toast on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 197,
      "durationSeconds": 816.8367205198311,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T16:20:41.211780+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1550-REMOTE",
      "taskId": 1550,
      "title": "Put the Spoon on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 165,
      "durationSeconds": 684.1525831765083,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:31:24.124470+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1551-REMOTE",
      "taskId": 1551,
      "title": "Pick up the Spoon - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 901,
      "durationSeconds": 3735.887742072933,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:14:44.095658+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1552-REMOTE",
      "taskId": 1552,
      "title": "Pick up the Book - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 765,
      "durationSeconds": 3171.980158363811,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:09:53.704762+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1553-REMOTE",
      "taskId": 1553,
      "title": "Pick up the Toy Figurine - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 889,
      "durationSeconds": 3686.131190569187,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:22:18.341829+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1554-REMOTE",
      "taskId": 1554,
      "title": "Pick up the Remote Control - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 957,
      "durationSeconds": 3968.084982423748,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:22:48.701988+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1555-REMOTE",
      "taskId": 1555,
      "title": "Put the Toy Figurine on the Book - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 281,
      "durationSeconds": 1165.1325810460535,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:07:40.307624+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1556-REMOTE",
      "taskId": 1556,
      "title": "Put the Remote Control on the Book - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 325,
      "durationSeconds": 1347.5732698931224,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:11:20.686956+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1557-REMOTE",
      "taskId": 1557,
      "title": "Put the Soap on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1201,
      "durationSeconds": 4979.801529666584,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:21.204987+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1558-REMOTE",
      "taskId": 1558,
      "title": "Put the Sponge on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1198,
      "durationSeconds": 4967.362391790648,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:46:11.210825+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1559-REMOTE",
      "taskId": 1559,
      "title": "Put the Toothbrush on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1198,
      "durationSeconds": 4967.362391790648,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:23.229861+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1560-REMOTE",
      "taskId": 1560,
      "title": "Put the Soap on the Sponge",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1196,
      "durationSeconds": 4959.06963320669,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:49:37.196178+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1561-REMOTE",
      "taskId": 1561,
      "title": "Put the Toothbrush on the Sponge",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 458,
      "durationSeconds": 1899.0417157263078,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:36.663601+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1562-REMOTE",
      "taskId": 1562,
      "title": "Rotate the Toothbrush",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 392,
      "durationSeconds": 1625.3806824557046,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:44:35.738246+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1563-REMOTE",
      "taskId": 1563,
      "title": "Pick up the Apricot - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 389,
      "durationSeconds": 1612.941544579768,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:26:15.208758+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1564-REMOTE",
      "taskId": 1564,
      "title": "Pick up the Kiwi - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 413,
      "durationSeconds": 1712.45464758726,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:26:35.237044+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1565-REMOTE",
      "taskId": 1565,
      "title": "Pick up the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 480,
      "durationSeconds": 1990.2620601498422,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:11:55.206193+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1566-REMOTE",
      "taskId": 1566,
      "title": "Put the Apricot into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 87,
      "durationSeconds": 360.7349984021589,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:29:49.219650+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1567-REMOTE",
      "taskId": 1567,
      "title": "Put the Kiwi into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 91,
      "durationSeconds": 377.32051557007424,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:13:13.850526+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1568-REMOTE",
      "taskId": 1568,
      "title": "Pick up the Chicken Wing - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 190,
      "durationSeconds": 787.8120654759792,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:48:03.051835+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1569-REMOTE",
      "taskId": 1569,
      "title": "Pick up the Chicken Nugget - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 202,
      "durationSeconds": 837.5686169797253,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:46:46.214642+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1570-REMOTE",
      "taskId": 1570,
      "title": "Pick up the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 232,
      "durationSeconds": 961.9599957390905,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:40:56.236560+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1571-REMOTE",
      "taskId": 1571,
      "title": "Put the Chicken Nugget on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 117,
      "durationSeconds": 485.12637716152403,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:44:23.241854+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1572-REMOTE",
      "taskId": 1572,
      "title": "Put the Chicken Wing on the Plate - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 206,
      "durationSeconds": 854.1541341476407,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:54.720315+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1573-REMOTE",
      "taskId": 1573,
      "title": "Pick up the Syringe - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1021,
      "durationSeconds": 4233.453257110394,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:47:31.230643+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1574-REMOTE",
      "taskId": 1574,
      "title": "Pick up the Test Tube - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1194,
      "durationSeconds": 4950.776874622733,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:44:21.217860+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1575-REMOTE",
      "taskId": 1575,
      "title": "Pick up the Tray - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1110,
      "durationSeconds": 4602.48101409651,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:47:13.257260+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1576-REMOTE",
      "taskId": 1576,
      "title": "Put the Syringe on the Tray - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 246,
      "durationSeconds": 1020.0093058267942,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:51:19.237864+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1577-REMOTE",
      "taskId": 1577,
      "title": "Put the Test Tube on the Tray - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 313,
      "durationSeconds": 1297.8167183893763,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:45:04.027612+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1578-REMOTE",
      "taskId": 1578,
      "title": "Pick up the Tomato - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1076,
      "durationSeconds": 4461.5041181692295,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:47:51.211021+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1579-REMOTE",
      "taskId": 1579,
      "title": "Pick up the Sausage - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1192,
      "durationSeconds": 4942.484116038775,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:46:55.196750+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1580-REMOTE",
      "taskId": 1580,
      "title": "Pick up the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 993,
      "durationSeconds": 4117.354636934986,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T23:50:40.597597+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1581-REMOTE",
      "taskId": 1581,
      "title": "Put the Tomato into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-17T16:33:55.707429+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1582-REMOTE",
      "taskId": 1582,
      "title": "Put the Sausage into the Bowl - Multi Embodiment",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:36:35.233170+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1584-REMOTE",
      "taskId": 1584,
      "title": "Put the Coffee Cup on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:35:23.332897+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1585-REMOTE",
      "taskId": 1585,
      "title": "Put the Earbud Case on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:35:15.877193+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1586-REMOTE",
      "taskId": 1586,
      "title": "Put the Marker Pen on the Laptop",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:35:09.225179+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1587-REMOTE",
      "taskId": 1587,
      "title": "Rotate the Coffee Cup",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:35:01.205348+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1588-REMOTE",
      "taskId": 1588,
      "title": "Rotate the Earbud Case",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:35:05.257927+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1589-REMOTE",
      "taskId": 1589,
      "title": "Rotate the Marker Pen",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T19:50:08.762167+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1590-REMOTE",
      "taskId": 1590,
      "title": "Put the Croissant on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:30:55.202140+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1591-REMOTE",
      "taskId": 1591,
      "title": "Put the Sausage on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:30:51.253819+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1592-REMOTE",
      "taskId": 1592,
      "title": "Put the Fried Egg on the Plate",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:57.209275+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1593-REMOTE",
      "taskId": 1593,
      "title": "Put the Sausage beside the Croissant",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:30:45.241368+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1594-REMOTE",
      "taskId": 1594,
      "title": "Rotate the Sausage",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T20:07:20.859905+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1595-REMOTE",
      "taskId": 1595,
      "title": "Rotate the Croissant",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-19T20:07:58.926599+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1596-REMOTE",
      "taskId": 1596,
      "title": "Put the Plush Toy on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:11.269347+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1597-REMOTE",
      "taskId": 1597,
      "title": "Put the Camera on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:15.231247+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1598-REMOTE",
      "taskId": 1598,
      "title": "Put the Keychain Charm on the Tray",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:19.211956+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1599-REMOTE",
      "taskId": 1599,
      "title": "Put the Keychain Charm on the Camera",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:23.229958+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1600-REMOTE",
      "taskId": 1600,
      "title": "Rotate the Camera",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:27.228452+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1601-REMOTE",
      "taskId": 1601,
      "title": "Rotate the Plush Toy",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:53.228616+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1602-REMOTE",
      "taskId": 1602,
      "title": "Put the Apple into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:36:23.276606+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1603-REMOTE",
      "taskId": 1603,
      "title": "Put the Lychee into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:47.229842+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1604-REMOTE",
      "taskId": 1604,
      "title": "Put the Tomato into the Bowl",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:41.213310+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1605-REMOTE",
      "taskId": 1605,
      "title": "Rearrange Three Items",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:37.199457+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1606-REMOTE",
      "taskId": 1606,
      "title": "Rearrange Three Items 2",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:36:27.260350+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1607-REMOTE",
      "taskId": 1607,
      "title": "Put the Lychee beside the Apple",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T17:34:31.245099+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1608-REMOTE",
      "taskId": 1608,
      "title": "Put the Chicken Leg into the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 3,
      "durationSeconds": 12.439137875936513,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:06:42.312994+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1609-REMOTE",
      "taskId": 1609,
      "title": "Put the Potato into the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:06:57.452110+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1610-REMOTE",
      "taskId": 1610,
      "title": "Put the Tomato into the Saucepan",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:07:21.432597+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1611-REMOTE",
      "taskId": 1611,
      "title": "Put the Potato beside the Chicken Leg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:07:44.378313+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1612-REMOTE",
      "taskId": 1612,
      "title": "Put the Tomato beside the Chicken Leg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:07:53.157702+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1613-REMOTE",
      "taskId": 1613,
      "title": "Rotate the Chicken Leg",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 2,
      "durationSeconds": 8.292758583957676,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T22:08:34.875606+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1614-REMOTE",
      "taskId": 1614,
      "title": "Rearrange Your Dining Table - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:44:21.678278+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1615-REMOTE",
      "taskId": 1615,
      "title": "Rearrange Your Dining Table 2 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:44:23.044735+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1616-REMOTE",
      "taskId": 1616,
      "title": "Rearrange Your Dining Table 3 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:44:24.757841+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1617-REMOTE",
      "taskId": 1617,
      "title": "Rearrange Your Dining Table 4 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:44:34.014647+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1618-REMOTE",
      "taskId": 1618,
      "title": "Rearrange Your Dining Table 5 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:44:58.666776+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    },
    {
      "id": "AXIS-1619-REMOTE",
      "taskId": 1619,
      "title": "Rearrange Your Dining Table 6 - LH",
      "source": "remote DB via axis-training/scripts/web2rv_dataset_manager.py fetch_remote_tasks",
      "state": "remote-verified-unrendered",
      "trajectoryCount": 1,
      "durationSeconds": 4.146379291978838,
      "estimatedDuration": true,
      "latestRemoteTrajectoryUpdatedAt": "2026-06-20T21:45:03.154623+00:00",
      "fetchedAt": "2026-06-20T23:52:21.693176+00:00"
    }
  ]
};
