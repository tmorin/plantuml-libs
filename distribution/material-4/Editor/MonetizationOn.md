# MonetizationOn


```text
material-4/Editor/MonetizationOn
```

```text
include('material-4/Editor/MonetizationOn')
```



| Illustration | MonetizationOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/MonetizationOn.png) | ![illustration for MonetizationOn](../../material-4/Editor/MonetizationOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonetizationOnXs>`
- `<$MonetizationOnSm>`
- `<$MonetizationOnMd>`
- `<$MonetizationOnLg>`





## MonetizationOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MonetizationOn
include('material-4/Editor/MonetizationOn')

' renders the element
MonetizationOn('MonetizationOn', 'Monetization On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MonetizationOn
include('material-4/Editor/MonetizationOn')

' renders the element
MonetizationOn('MonetizationOn', 'Monetization On', 'an optional tech label', 'an optional description')
@enduml
```

