# ShortText


```text
material-4/Editor/ShortText
```

```text
include('material-4/Editor/ShortText')
```



| Illustration | ShortText |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/ShortText.png) | ![illustration for ShortText](../../material-4/Editor/ShortText.Local.png) |




## ShortText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ShortText
include('material-4/Editor/ShortText')

' renders the element
ShortText('ShortText', 'Short Text', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShortText
include('material-4/Editor/ShortText')

' renders the element
ShortText('ShortText', 'Short Text', 'an optional tech label', 'an optional description')
@enduml
```

