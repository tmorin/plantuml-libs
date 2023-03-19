# Sourcetree


```text
fontawesome-6/Brands/Sourcetree
```

```text
include('fontawesome-6/Brands/Sourcetree')
```



| Illustration | Sourcetree |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Sourcetree.png) | ![illustration for Sourcetree](../../fontawesome-6/Brands/Sourcetree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SourcetreeXs>`
- `<$SourcetreeSm>`
- `<$SourcetreeMd>`
- `<$SourcetreeLg>`





## Sourcetree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sourcetree
include('fontawesome-6/Brands/Sourcetree')

' renders the element
Sourcetree('Sourcetree', 'Sourcetree', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sourcetree
include('fontawesome-6/Brands/Sourcetree')

' renders the element
Sourcetree('Sourcetree', 'Sourcetree', 'an optional tech label', 'an optional description')
@enduml
```

