# Spectrum


```text
simpleicons-5/S/Spectrum
```

```text
include('simpleicons-5/S/Spectrum')
```



| Illustration | Spectrum |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Spectrum.png) | ![illustration for Spectrum](../../simpleicons-5/S/Spectrum.Local.png) |




## Spectrum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spectrum
include('simpleicons-5/S/Spectrum')

' renders the element
Spectrum('Spectrum', 'Spectrum', 'an optional tech label')
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

' loads the Item which embeds the element Spectrum
include('simpleicons-5/S/Spectrum')

' renders the element
Spectrum('Spectrum', 'Spectrum', 'an optional tech label')
@enduml
```

