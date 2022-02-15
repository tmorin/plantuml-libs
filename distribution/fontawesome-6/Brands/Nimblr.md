# Nimblr


```text
fontawesome-6/Brands/Nimblr
```

```text
include('fontawesome-6/Brands/Nimblr')
```



| Illustration | Nimblr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Nimblr.png) | ![illustration for Nimblr](../../fontawesome-6/Brands/Nimblr.Local.png) |




## Nimblr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Nimblr
include('fontawesome-6/Brands/Nimblr')

' renders the element
Nimblr('Nimblr', 'Nimblr', 'an optional tech label')
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

' loads the Item which embeds the element Nimblr
include('fontawesome-6/Brands/Nimblr')

' renders the element
Nimblr('Nimblr', 'Nimblr', 'an optional tech label')
@enduml
```

