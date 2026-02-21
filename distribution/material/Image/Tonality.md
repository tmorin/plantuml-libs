# Tonality


```text
material/Image/Tonality
```

```text
include('material/Image/Tonality')
```



| Illustration | Tonality |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Tonality.png) | ![illustration for Tonality](../../material/Image/Tonality.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TonalityXs>`
- `<$TonalitySm>`
- `<$TonalityMd>`
- `<$TonalityLg>`





## Tonality

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Tonality
include('material/Image/Tonality')

' renders the element
Tonality('Tonality', 'Tonality', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tonality
include('material/Image/Tonality')

' renders the element
Tonality('Tonality', 'Tonality', 'an optional tech label', 'an optional description')
@enduml
```

