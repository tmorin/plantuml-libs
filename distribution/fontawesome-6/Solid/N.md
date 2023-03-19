# N


```text
fontawesome-6/Solid/N
```

```text
include('fontawesome-6/Solid/N')
```



| Illustration | N |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/N.png) | ![illustration for N](../../fontawesome-6/Solid/N.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element N
include('fontawesome-6/Solid/N')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element N
include('fontawesome-6/Solid/N')

' renders the element
N('N', 'N', 'an optional tech label', 'an optional description')
@enduml
```

