# SingleQuoteRight


```text
fontawesome/Solid/SingleQuoteRight
```

```text
include('fontawesome/Solid/SingleQuoteRight')
```



| Illustration | SingleQuoteRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SingleQuoteRight.png) | ![illustration for SingleQuoteRight](../../fontawesome/Solid/SingleQuoteRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SingleQuoteRightXs>`
- `<$SingleQuoteRightSm>`
- `<$SingleQuoteRightMd>`
- `<$SingleQuoteRightLg>`





## SingleQuoteRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SingleQuoteRight
include('fontawesome/Solid/SingleQuoteRight')

' renders the element
SingleQuoteRight('SingleQuoteRight', 'Single Quote Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SingleQuoteRight
include('fontawesome/Solid/SingleQuoteRight')

' renders the element
SingleQuoteRight('SingleQuoteRight', 'Single Quote Right', 'an optional tech label', 'an optional description')
@enduml
```

