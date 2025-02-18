# Audacity


```text
simpleicons-14/A/Audacity
```

```text
include('simpleicons-14/A/Audacity')
```



| Illustration | Audacity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Audacity.png) | ![illustration for Audacity](../../simpleicons-14/A/Audacity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AudacityXs>`
- `<$AudacitySm>`
- `<$AudacityMd>`
- `<$AudacityLg>`





## Audacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Audacity
include('simpleicons-14/A/Audacity')

' renders the element
Audacity('Audacity', 'Audacity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audacity
include('simpleicons-14/A/Audacity')

' renders the element
Audacity('Audacity', 'Audacity', 'an optional tech label', 'an optional description')
@enduml
```

