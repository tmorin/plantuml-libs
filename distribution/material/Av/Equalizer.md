# Equalizer


```text
material/Av/Equalizer
```

```text
include('material/Av/Equalizer')
```



| Illustration | Equalizer |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Equalizer.png) | ![illustration for Equalizer](../../material/Av/Equalizer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EqualizerXs>`
- `<$EqualizerSm>`
- `<$EqualizerMd>`
- `<$EqualizerLg>`





## Equalizer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Equalizer
include('material/Av/Equalizer')

' renders the element
Equalizer('Equalizer', 'Equalizer', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Equalizer
include('material/Av/Equalizer')

' renders the element
Equalizer('Equalizer', 'Equalizer', 'an optional tech label', 'an optional description')
@enduml
```

