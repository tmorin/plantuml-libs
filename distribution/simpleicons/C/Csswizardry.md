# Csswizardry


```text
simpleicons/C/Csswizardry
```

```text
include('simpleicons/C/Csswizardry')
```



| Illustration | Csswizardry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Csswizardry.png) | ![illustration for Csswizardry](../../simpleicons/C/Csswizardry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CsswizardryXs>`
- `<$CsswizardrySm>`
- `<$CsswizardryMd>`
- `<$CsswizardryLg>`





## Csswizardry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Csswizardry
include('simpleicons/C/Csswizardry')

' renders the element
Csswizardry('Csswizardry', 'Csswizardry', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Csswizardry
include('simpleicons/C/Csswizardry')

' renders the element
Csswizardry('Csswizardry', 'Csswizardry', 'an optional tech label', 'an optional description')
@enduml
```

