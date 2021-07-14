# CleanHands


```text
material-4/Social/CleanHands
```

```text
include('material-4/Social/CleanHands')
```



| Illustration | CleanHands |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/CleanHands.png) | ![illustration for CleanHands](../../material-4/Social/CleanHands.Local.png) |




## CleanHands

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CleanHands
include('material-4/Social/CleanHands')

' renders the element
CleanHands('CleanHands', 'Clean Hands', 'an optional tech label')
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

' loads the Item which embeds the element CleanHands
include('material-4/Social/CleanHands')

' renders the element
CleanHands('CleanHands', 'Clean Hands', 'an optional tech label')
@enduml
```

