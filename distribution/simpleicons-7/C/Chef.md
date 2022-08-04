# Chef


```text
simpleicons-7/C/Chef
```

```text
include('simpleicons-7/C/Chef')
```



| Illustration | Chef |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chef.png) | ![illustration for Chef](../../simpleicons-7/C/Chef.Local.png) |




## Chef

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chef
include('simpleicons-7/C/Chef')

' renders the element
Chef('Chef', 'Chef', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chef
include('simpleicons-7/C/Chef')

' renders the element
Chef('Chef', 'Chef', 'an optional tech label', 'an optional description')
@enduml
```

