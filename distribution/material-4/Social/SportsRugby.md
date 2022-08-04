# SportsRugby


```text
material-4/Social/SportsRugby
```

```text
include('material-4/Social/SportsRugby')
```



| Illustration | SportsRugby |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsRugby.png) | ![illustration for SportsRugby](../../material-4/Social/SportsRugby.Local.png) |




## SportsRugby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsRugby
include('material-4/Social/SportsRugby')

' renders the element
SportsRugby('SportsRugby', 'Sports Rugby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsRugby
include('material-4/Social/SportsRugby')

' renders the element
SportsRugby('SportsRugby', 'Sports Rugby', 'an optional tech label', 'an optional description')
@enduml
```

