# SmartButton


```text
material/Action/SmartButton
```

```text
include('material/Action/SmartButton')
```



| Illustration | SmartButton |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SmartButton.png) | ![illustration for SmartButton](../../material/Action/SmartButton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmartButtonXs>`
- `<$SmartButtonSm>`
- `<$SmartButtonMd>`
- `<$SmartButtonLg>`





## SmartButton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SmartButton
include('material/Action/SmartButton')

' renders the element
SmartButton('SmartButton', 'Smart Button', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SmartButton
include('material/Action/SmartButton')

' renders the element
SmartButton('SmartButton', 'Smart Button', 'an optional tech label', 'an optional description')
@enduml
```

