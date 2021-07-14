# Hungryjacks


```text
simpleicons-5/H/Hungryjacks
```

```text
include('simpleicons-5/H/Hungryjacks')
```



| Illustration | Hungryjacks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hungryjacks.png) | ![illustration for Hungryjacks](../../simpleicons-5/H/Hungryjacks.Local.png) |




## Hungryjacks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hungryjacks
include('simpleicons-5/H/Hungryjacks')

' renders the element
Hungryjacks('Hungryjacks', 'Hungryjacks', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hungryjacks
include('simpleicons-5/H/Hungryjacks')

' renders the element
Hungryjacks('Hungryjacks', 'Hungryjacks', 'an optional tech label')
@enduml
```

