# Shuffle


```text
material/Av/Shuffle
```

```text
include('material/Av/Shuffle')
```



| Illustration | Shuffle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Shuffle.png) | ![illustration for Shuffle](../../material/Av/Shuffle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShuffleXs>`
- `<$ShuffleSm>`
- `<$ShuffleMd>`
- `<$ShuffleLg>`





## Shuffle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Shuffle
include('material/Av/Shuffle')

' renders the element
Shuffle('Shuffle', 'Shuffle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shuffle
include('material/Av/Shuffle')

' renders the element
Shuffle('Shuffle', 'Shuffle', 'an optional tech label', 'an optional description')
@enduml
```

