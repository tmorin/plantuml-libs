# TextSlash


```text
fontawesome-6/Solid/TextSlash
```

```text
include('fontawesome-6/Solid/TextSlash')
```



| Illustration | TextSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TextSlash.png) | ![illustration for TextSlash](../../fontawesome-6/Solid/TextSlash.Local.png) |




## TextSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TextSlash
include('fontawesome-6/Solid/TextSlash')

' renders the element
TextSlash('TextSlash', 'Text Slash', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TextSlash
include('fontawesome-6/Solid/TextSlash')

' renders the element
TextSlash('TextSlash', 'Text Slash', 'an optional tech label', 'an optional description')
@enduml
```

