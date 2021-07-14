# Toc


```text
material-4/Action/Toc
```

```text
include('material-4/Action/Toc')
```



| Illustration | Toc |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Toc.png) | ![illustration for Toc](../../material-4/Action/Toc.Local.png) |




## Toc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Toc
include('material-4/Action/Toc')

' renders the element
Toc('Toc', 'Toc', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Toc
include('material-4/Action/Toc')

' renders the element
Toc('Toc', 'Toc', 'an optional tech label')
@enduml
```

