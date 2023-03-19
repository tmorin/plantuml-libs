# Repeat


```text
material-4/Av/Repeat
```

```text
include('material-4/Av/Repeat')
```



| Illustration | Repeat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Repeat.png) | ![illustration for Repeat](../../material-4/Av/Repeat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RepeatXs>`
- `<$RepeatSm>`
- `<$RepeatMd>`
- `<$RepeatLg>`





## Repeat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Repeat
include('material-4/Av/Repeat')

' renders the element
Repeat('Repeat', 'Repeat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Repeat
include('material-4/Av/Repeat')

' renders the element
Repeat('Repeat', 'Repeat', 'an optional tech label', 'an optional description')
@enduml
```

