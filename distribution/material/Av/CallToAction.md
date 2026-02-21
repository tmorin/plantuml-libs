# CallToAction


```text
material/Av/CallToAction
```

```text
include('material/Av/CallToAction')
```



| Illustration | CallToAction |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/CallToAction.png) | ![illustration for CallToAction](../../material/Av/CallToAction.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CallToActionXs>`
- `<$CallToActionSm>`
- `<$CallToActionMd>`
- `<$CallToActionLg>`





## CallToAction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CallToAction
include('material/Av/CallToAction')

' renders the element
CallToAction('CallToAction', 'Call To Action', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CallToAction
include('material/Av/CallToAction')

' renders the element
CallToAction('CallToAction', 'Call To Action', 'an optional tech label', 'an optional description')
@enduml
```

