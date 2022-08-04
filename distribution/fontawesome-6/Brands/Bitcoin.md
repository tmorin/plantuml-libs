# Bitcoin


```text
fontawesome-6/Brands/Bitcoin
```

```text
include('fontawesome-6/Brands/Bitcoin')
```



| Illustration | Bitcoin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Bitcoin.png) | ![illustration for Bitcoin](../../fontawesome-6/Brands/Bitcoin.Local.png) |




## Bitcoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bitcoin
include('fontawesome-6/Brands/Bitcoin')

' renders the element
Bitcoin('Bitcoin', 'Bitcoin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitcoin
include('fontawesome-6/Brands/Bitcoin')

' renders the element
Bitcoin('Bitcoin', 'Bitcoin', 'an optional tech label', 'an optional description')
@enduml
```

