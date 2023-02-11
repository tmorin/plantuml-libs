# P5Dotjs


```text
simpleicons-8/P/P5Dotjs
```

```text
include('simpleicons-8/P/P5Dotjs')
```



| Illustration | P5Dotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/P5Dotjs.png) | ![illustration for P5Dotjs](../../simpleicons-8/P/P5Dotjs.Local.png) |




## P5Dotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element P5Dotjs
include('simpleicons-8/P/P5Dotjs')

' renders the element
P5Dotjs('P5Dotjs', 'P5 Dotjs', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element P5Dotjs
include('simpleicons-8/P/P5Dotjs')

' renders the element
P5Dotjs('P5Dotjs', 'P5 Dotjs', 'an optional tech label', 'an optional description')
@enduml
```

