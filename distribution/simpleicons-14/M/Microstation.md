# Microstation


```text
simpleicons-14/M/Microstation
```

```text
include('simpleicons-14/M/Microstation')
```



| Illustration | Microstation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Microstation.png) | ![illustration for Microstation](../../simpleicons-14/M/Microstation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrostationXs>`
- `<$MicrostationSm>`
- `<$MicrostationMd>`
- `<$MicrostationLg>`





## Microstation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Microstation
include('simpleicons-14/M/Microstation')

' renders the element
Microstation('Microstation', 'Microstation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microstation
include('simpleicons-14/M/Microstation')

' renders the element
Microstation('Microstation', 'Microstation', 'an optional tech label', 'an optional description')
@enduml
```

