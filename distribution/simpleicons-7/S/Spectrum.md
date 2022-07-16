# Spectrum


```text
simpleicons-7/S/Spectrum
```

```text
include('simpleicons-7/S/Spectrum')
```



| Illustration | Spectrum |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Spectrum.png) | ![illustration for Spectrum](../../simpleicons-7/S/Spectrum.Local.png) |




## Spectrum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spectrum
include('simpleicons-7/S/Spectrum')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spectrum
include('simpleicons-7/S/Spectrum')

' renders the element
Spectrum('Spectrum', 'Spectrum', 'an optional tech label')
@enduml
```

