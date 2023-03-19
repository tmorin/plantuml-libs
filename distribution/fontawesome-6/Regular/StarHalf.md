# StarHalf


```text
fontawesome-6/Regular/StarHalf
```

```text
include('fontawesome-6/Regular/StarHalf')
```



| Illustration | StarHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/StarHalf.png) | ![illustration for StarHalf](../../fontawesome-6/Regular/StarHalf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarHalfXs>`
- `<$StarHalfSm>`
- `<$StarHalfMd>`
- `<$StarHalfLg>`





## StarHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StarHalf
include('fontawesome-6/Regular/StarHalf')

' renders the element
StarHalf('StarHalf', 'Star Half', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarHalf
include('fontawesome-6/Regular/StarHalf')

' renders the element
StarHalf('StarHalf', 'Star Half', 'an optional tech label', 'an optional description')
@enduml
```

