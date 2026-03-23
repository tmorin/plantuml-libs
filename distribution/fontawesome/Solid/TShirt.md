# TShirt


```text
fontawesome/Solid/TShirt
```

```text
include('fontawesome/Solid/TShirt')
```



| Illustration | TShirt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TShirt.png) | ![illustration for TShirt](../../fontawesome/Solid/TShirt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TShirtXs>`
- `<$TShirtSm>`
- `<$TShirtMd>`
- `<$TShirtLg>`





## TShirt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TShirt
include('fontawesome/Solid/TShirt')

' renders the element
TShirt('TShirt', 'T Shirt', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element TShirt
include('fontawesome/Solid/TShirt')

' renders the element
TShirt('TShirt', 'T Shirt', 'an optional tech label', 'an optional description')
@enduml
```

