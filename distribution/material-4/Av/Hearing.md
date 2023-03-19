# Hearing


```text
material-4/Av/Hearing
```

```text
include('material-4/Av/Hearing')
```



| Illustration | Hearing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Hearing.png) | ![illustration for Hearing](../../material-4/Av/Hearing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HearingXs>`
- `<$HearingSm>`
- `<$HearingMd>`
- `<$HearingLg>`





## Hearing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Hearing
include('material-4/Av/Hearing')

' renders the element
Hearing('Hearing', 'Hearing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hearing
include('material-4/Av/Hearing')

' renders the element
Hearing('Hearing', 'Hearing', 'an optional tech label', 'an optional description')
@enduml
```

