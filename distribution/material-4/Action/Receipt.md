# Receipt


```text
material-4/Action/Receipt
```

```text
include('material-4/Action/Receipt')
```



| Illustration | Receipt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Receipt.png) | ![illustration for Receipt](../../material-4/Action/Receipt.Local.png) |




## Receipt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Receipt
include('material-4/Action/Receipt')

' renders the element
Receipt('Receipt', 'Receipt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Receipt
include('material-4/Action/Receipt')

' renders the element
Receipt('Receipt', 'Receipt', 'an optional tech label', 'an optional description')
@enduml
```

