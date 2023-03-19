# StackOverflow


```text
fontawesome-6/Brands/StackOverflow
```

```text
include('fontawesome-6/Brands/StackOverflow')
```



| Illustration | StackOverflow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/StackOverflow.png) | ![illustration for StackOverflow](../../fontawesome-6/Brands/StackOverflow.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StackOverflow
include('fontawesome-6/Brands/StackOverflow')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StackOverflow
include('fontawesome-6/Brands/StackOverflow')

' renders the element
StackOverflow('StackOverflow', 'Stack Overflow', 'an optional tech label', 'an optional description')
@enduml
```

