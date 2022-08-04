# BloggerB


```text
fontawesome-6/Brands/BloggerB
```

```text
include('fontawesome-6/Brands/BloggerB')
```



| Illustration | BloggerB |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/BloggerB.png) | ![illustration for BloggerB](../../fontawesome-6/Brands/BloggerB.Local.png) |




## BloggerB

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BloggerB
include('fontawesome-6/Brands/BloggerB')

' renders the element
BloggerB('BloggerB', 'Blogger B', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BloggerB
include('fontawesome-6/Brands/BloggerB')

' renders the element
BloggerB('BloggerB', 'Blogger B', 'an optional tech label', 'an optional description')
@enduml
```

