# Copy


```text
fontawesome-5/Regular/Copy
```

```text
include('fontawesome-5/Regular/Copy')
```



| Illustration | Copy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Copy.png) | ![illustration for Copy](../../fontawesome-5/Regular/Copy.Local.png) |




## Copy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Copy
include('fontawesome-5/Regular/Copy')

' renders the element
Copy('Copy', 'Copy', 'an optional tech label')
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

' loads the Item which embeds the element Copy
include('fontawesome-5/Regular/Copy')

' renders the element
Copy('Copy', 'Copy', 'an optional tech label')
@enduml
```

