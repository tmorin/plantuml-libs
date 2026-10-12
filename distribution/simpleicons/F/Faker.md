# Faker


```text
simpleicons/F/Faker
```

```text
include('simpleicons/F/Faker')
```



| Illustration | Faker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Faker.png) | ![illustration for Faker](../../simpleicons/F/Faker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FakerXs>`
- `<$FakerSm>`
- `<$FakerMd>`
- `<$FakerLg>`





## Faker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Faker
include('simpleicons/F/Faker')

' renders the element
Faker('Faker', 'Faker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Faker
include('simpleicons/F/Faker')

' renders the element
Faker('Faker', 'Faker', 'an optional tech label', 'an optional description')
@enduml
```

