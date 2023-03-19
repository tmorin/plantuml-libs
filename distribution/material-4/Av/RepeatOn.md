# RepeatOn


```text
material-4/Av/RepeatOn
```

```text
include('material-4/Av/RepeatOn')
```



| Illustration | RepeatOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/RepeatOn.png) | ![illustration for RepeatOn](../../material-4/Av/RepeatOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RepeatOnXs>`
- `<$RepeatOnSm>`
- `<$RepeatOnMd>`
- `<$RepeatOnLg>`





## RepeatOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RepeatOn
include('material-4/Av/RepeatOn')

' renders the element
RepeatOn('RepeatOn', 'Repeat On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RepeatOn
include('material-4/Av/RepeatOn')

' renders the element
RepeatOn('RepeatOn', 'Repeat On', 'an optional tech label', 'an optional description')
@enduml
```

