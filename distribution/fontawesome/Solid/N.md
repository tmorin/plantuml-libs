# N


```text
fontawesome/Solid/N
```

```text
include('fontawesome/Solid/N')
```



| Illustration | N |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/N.png) | ![illustration for N](../../fontawesome/Solid/N.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NXs>`
- `<$NSm>`
- `<$NMd>`
- `<$NLg>`





## N

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element N
include('fontawesome/Solid/N')

' renders the element
N('N', 'N', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element N
include('fontawesome/Solid/N')

' renders the element
N('N', 'N', 'an optional tech label', 'an optional description')
@enduml
```

