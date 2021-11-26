# SportsMma


```text
material-4/Social/SportsMma
```

```text
include('material-4/Social/SportsMma')
```



| Illustration | SportsMma |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsMma.png) | ![illustration for SportsMma](../../material-4/Social/SportsMma.Local.png) |




## SportsMma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsMma
include('material-4/Social/SportsMma')

' renders the element
SportsMma('SportsMma', 'Sports Mma', 'an optional tech label')
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

' loads the Item which embeds the element SportsMma
include('material-4/Social/SportsMma')

' renders the element
SportsMma('SportsMma', 'Sports Mma', 'an optional tech label')
@enduml
```

