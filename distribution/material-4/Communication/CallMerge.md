# CallMerge


```text
material-4/Communication/CallMerge
```

```text
include('material-4/Communication/CallMerge')
```



| Illustration | CallMerge |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallMerge.png) | ![illustration for CallMerge](../../material-4/Communication/CallMerge.Local.png) |




## CallMerge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallMerge
include('material-4/Communication/CallMerge')

' renders the element
CallMerge('CallMerge', 'Call Merge', 'an optional tech label')
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

' loads the Item which embeds the element CallMerge
include('material-4/Communication/CallMerge')

' renders the element
CallMerge('CallMerge', 'Call Merge', 'an optional tech label')
@enduml
```

