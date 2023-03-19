# Spectrum


```text
simpleicons-8/S/Spectrum
```

```text
include('simpleicons-8/S/Spectrum')
```



| Illustration | Spectrum |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Spectrum.png) | ![illustration for Spectrum](../../simpleicons-8/S/Spectrum.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpectrumXs>`
- `<$SpectrumSm>`
- `<$SpectrumMd>`
- `<$SpectrumLg>`





## Spectrum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spectrum
include('simpleicons-8/S/Spectrum')

' renders the element
Spectrum('Spectrum', 'Spectrum', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spectrum
include('simpleicons-8/S/Spectrum')

' renders the element
Spectrum('Spectrum', 'Spectrum', 'an optional tech label', 'an optional description')
@enduml
```

