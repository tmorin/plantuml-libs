# Pages


```text
material-4/Social/Pages
```

```text
include('material-4/Social/Pages')
```



| Illustration | Pages |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Pages.png) | ![illustration for Pages](../../material-4/Social/Pages.Local.png) |




## Pages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Pages
include('material-4/Social/Pages')

' renders the element
Pages('Pages', 'Pages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pages
include('material-4/Social/Pages')

' renders the element
Pages('Pages', 'Pages', 'an optional tech label', 'an optional description')
@enduml
```

