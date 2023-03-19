# ShuffleOn


```text
material-4/Av/ShuffleOn
```

```text
include('material-4/Av/ShuffleOn')
```



| Illustration | ShuffleOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/ShuffleOn.png) | ![illustration for ShuffleOn](../../material-4/Av/ShuffleOn.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element ShuffleOn
include('material-4/Av/ShuffleOn')

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
include('material-4/bootstrap')

' loads the Item which embeds the element ShuffleOn
include('material-4/Av/ShuffleOn')

' renders the element
ShuffleOn('ShuffleOn', 'Shuffle On', 'an optional tech label', 'an optional description')
@enduml
```

