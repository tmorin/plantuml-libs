# Apache


```text
simpleicons-5/A/Apache
```

```text
include('simpleicons-5/A/Apache')
```



| Illustration | Apache |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apache.png) | ![illustration for Apache](../../simpleicons-5/A/Apache.Local.png) |




## Apache

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apache
include('simpleicons-5/A/Apache')

' renders the element
Apache('Apache', 'Apache', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apache
include('simpleicons-5/A/Apache')

' renders the element
Apache('Apache', 'Apache', 'an optional tech label')
@enduml
```

