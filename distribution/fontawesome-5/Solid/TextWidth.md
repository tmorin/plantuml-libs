# TextWidth


```text
fontawesome-5/Solid/TextWidth
```

```text
include('fontawesome-5/Solid/TextWidth')
```



| Illustration | TextWidth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TextWidth.png) | ![illustration for TextWidth](../../fontawesome-5/Solid/TextWidth.Local.png) |




## TextWidth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TextWidth
include('fontawesome-5/Solid/TextWidth')

' renders the element
TextWidth('TextWidth', 'Text Width', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TextWidth
include('fontawesome-5/Solid/TextWidth')

' renders the element
TextWidth('TextWidth', 'Text Width', 'an optional tech label')
@enduml
```

