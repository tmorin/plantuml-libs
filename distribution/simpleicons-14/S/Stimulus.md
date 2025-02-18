# Stimulus


```text
simpleicons-14/S/Stimulus
```

```text
include('simpleicons-14/S/Stimulus')
```



| Illustration | Stimulus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stimulus.png) | ![illustration for Stimulus](../../simpleicons-14/S/Stimulus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StimulusXs>`
- `<$StimulusSm>`
- `<$StimulusMd>`
- `<$StimulusLg>`





## Stimulus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stimulus
include('simpleicons-14/S/Stimulus')

' renders the element
Stimulus('Stimulus', 'Stimulus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stimulus
include('simpleicons-14/S/Stimulus')

' renders the element
Stimulus('Stimulus', 'Stimulus', 'an optional tech label', 'an optional description')
@enduml
```

