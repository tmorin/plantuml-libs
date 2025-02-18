# Roamresearch


```text
simpleicons-14/R/Roamresearch
```

```text
include('simpleicons-14/R/Roamresearch')
```



| Illustration | Roamresearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Roamresearch.png) | ![illustration for Roamresearch](../../simpleicons-14/R/Roamresearch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoamresearchXs>`
- `<$RoamresearchSm>`
- `<$RoamresearchMd>`
- `<$RoamresearchLg>`





## Roamresearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Roamresearch
include('simpleicons-14/R/Roamresearch')

' renders the element
Roamresearch('Roamresearch', 'Roamresearch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roamresearch
include('simpleicons-14/R/Roamresearch')

' renders the element
Roamresearch('Roamresearch', 'Roamresearch', 'an optional tech label', 'an optional description')
@enduml
```

