# Castro


```text
simpleicons-5/C/Castro
```

```text
include('simpleicons-5/C/Castro')
```



| Illustration | Castro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Castro.png) | ![illustration for Castro](../../simpleicons-5/C/Castro.Local.png) |




## Castro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Castro
include('simpleicons-5/C/Castro')

' renders the element
Castro('Castro', 'Castro', 'an optional tech label')
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

' loads the Item which embeds the element Castro
include('simpleicons-5/C/Castro')

' renders the element
Castro('Castro', 'Castro', 'an optional tech label')
@enduml
```

