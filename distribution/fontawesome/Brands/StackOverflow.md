# StackOverflow


```text
fontawesome/Brands/StackOverflow
```

```text
include('fontawesome/Brands/StackOverflow')
```



| Illustration | StackOverflow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/StackOverflow.png) | ![illustration for StackOverflow](../../fontawesome/Brands/StackOverflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackOverflowXs>`
- `<$StackOverflowSm>`
- `<$StackOverflowMd>`
- `<$StackOverflowLg>`





## StackOverflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StackOverflow
include('fontawesome/Brands/StackOverflow')

' renders the element
StackOverflow('StackOverflow', 'Stack Overflow', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element StackOverflow
include('fontawesome/Brands/StackOverflow')

' renders the element
StackOverflow('StackOverflow', 'Stack Overflow', 'an optional tech label', 'an optional description')
@enduml
```

