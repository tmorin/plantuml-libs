# Contactlesspayment


```text
simpleicons-8/C/Contactlesspayment
```

```text
include('simpleicons-8/C/Contactlesspayment')
```



| Illustration | Contactlesspayment |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Contactlesspayment.png) | ![illustration for Contactlesspayment](../../simpleicons-8/C/Contactlesspayment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactlesspaymentXs>`
- `<$ContactlesspaymentSm>`
- `<$ContactlesspaymentMd>`
- `<$ContactlesspaymentLg>`





## Contactlesspayment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Contactlesspayment
include('simpleicons-8/C/Contactlesspayment')

' renders the element
Contactlesspayment('Contactlesspayment', 'Contactlesspayment', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contactlesspayment
include('simpleicons-8/C/Contactlesspayment')

' renders the element
Contactlesspayment('Contactlesspayment', 'Contactlesspayment', 'an optional tech label', 'an optional description')
@enduml
```

