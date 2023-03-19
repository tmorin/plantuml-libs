# Adversal


```text
fontawesome-6/Brands/Adversal
```

```text
include('fontawesome-6/Brands/Adversal')
```



| Illustration | Adversal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Adversal.png) | ![illustration for Adversal](../../fontawesome-6/Brands/Adversal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdversalXs>`
- `<$AdversalSm>`
- `<$AdversalMd>`
- `<$AdversalLg>`





## Adversal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Adversal
include('fontawesome-6/Brands/Adversal')

' renders the element
Adversal('Adversal', 'Adversal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adversal
include('fontawesome-6/Brands/Adversal')

' renders the element
Adversal('Adversal', 'Adversal', 'an optional tech label', 'an optional description')
@enduml
```

