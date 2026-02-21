# Skeleton


```text
simpleicons-14/S/Skeleton
```

```text
include('simpleicons-14/S/Skeleton')
```



| Illustration | Skeleton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Skeleton.png) | ![illustration for Skeleton](../../simpleicons-14/S/Skeleton.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Skeleton
include('simpleicons-14/S/Skeleton')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Skeleton
include('simpleicons-14/S/Skeleton')

' renders the element
Skeleton('Skeleton', 'Skeleton', 'an optional tech label', 'an optional description')
@enduml
```

