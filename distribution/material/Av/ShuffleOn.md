# ShuffleOn


```text
material/Av/ShuffleOn
```

```text
include('material/Av/ShuffleOn')
```



| Illustration | ShuffleOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/ShuffleOn.png) | ![illustration for ShuffleOn](../../material/Av/ShuffleOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShuffleOnXs>`
- `<$ShuffleOnSm>`
- `<$ShuffleOnMd>`
- `<$ShuffleOnLg>`





## ShuffleOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ShuffleOn
include('material/Av/ShuffleOn')

' renders the element
ShuffleOn('ShuffleOn', 'Shuffle On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShuffleOn
include('material/Av/ShuffleOn')

' renders the element
ShuffleOn('ShuffleOn', 'Shuffle On', 'an optional tech label', 'an optional description')
@enduml
```

