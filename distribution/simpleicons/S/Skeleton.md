# Skeleton


```text
simpleicons/S/Skeleton
```

```text
include('simpleicons/S/Skeleton')
```



| Illustration | Skeleton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Skeleton.png) | ![illustration for Skeleton](../../simpleicons/S/Skeleton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkeletonXs>`
- `<$SkeletonSm>`
- `<$SkeletonMd>`
- `<$SkeletonLg>`





## Skeleton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Skeleton
include('simpleicons/S/Skeleton')

' renders the element
Skeleton('Skeleton', 'Skeleton', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Skeleton
include('simpleicons/S/Skeleton')

' renders the element
Skeleton('Skeleton', 'Skeleton', 'an optional tech label', 'an optional description')
@enduml
```

