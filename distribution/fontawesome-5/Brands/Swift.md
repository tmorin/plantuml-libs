# Swift


```text
fontawesome-5/Brands/Swift
```

```text
include('fontawesome-5/Brands/Swift')
```



| Illustration | Swift |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Swift.png) | ![illustration for Swift](../../fontawesome-5/Brands/Swift.Local.png) |




## Swift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Swift
include('fontawesome-5/Brands/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label')
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

' loads the Item which embeds the element Swift
include('fontawesome-5/Brands/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label')
@enduml
```

